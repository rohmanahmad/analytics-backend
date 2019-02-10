'use strict'

const URLSearchParams = require('url').URLSearchParams
const got = use('got')
const _ = use('_')
const md5 = use('md5')
const utils = use('Utils.Helper')
const Models = use('Models')

const RawHijupProducts = new Models().model('RawHijupProducts.Model')
const RawHijupCategories = new Models().model('RawHijupCategories.Model')
const RawHijupProductsDetail = new Models().model('RawHijupProductsDetail.Model')
const StoreCategories = new Models().model('StoreCategories.Model')
const StoreProducts = new Models().model('StoreProducts.Model')
const StoreProductPrices = new Models().model('StoreProductPrices.Model')
const StoreProductVariants = new Models().model('StoreProductVariants.Model')
const StoreProductBrands = new Models().model('StoreProductBrands.Model')

const graphUrl = 'https://www.hijup.com/proxy/graphql'
const prefix = 'hijup'
const localLimit = 1000

/*
    node service.js [-i _i_ -process _p_]
    * _p_:
        - import_categories : import from website to local
        - import_products : import from website to local
        - import_details : import from website to local
        - update_categories : update from raw_categories to real
        - update_products : update from raw_products to real
    * _i_: number
*/

class Hijup {
    async handle (args = {}) {
        utils.debugme('handle hijup.com crawl service')
        const interval = parseInt(args.i) || parseInt(args.interval)
        const type = args.process || 'all'
        await this.run(type)
        if (interval > 0) {
            setInterval(async () => {
                utils.debugme('run interval')
                await this.run(type)
            }, interval * 1000)
        }
    }

    categories () {
        return []
    }

    getCookies () {
        return '_vwo_uuid_v2=DEDB50505E321113CDA9F20E7851F5D0C|88a0c359f346a7f7374ae68f6f732600; _gcl_au=1.1.1673996750.1549294413; ' +
        '_vis_opt_s=1%7C; _vis_opt_test_cookie=1; _ga=GA1.2.1801896072.1549294413; _gid=GA1.2.1139288528.1549294413; _fbp=fb.1.15492' +
        '94413574.1882122126; p_token=1549294415172.2751708331.2168906334; s_token=1549294415172.2751708331.2168906334; __asc=bb48f4' +
        'af168b924ade9c458fab8; __auc=bb48f4af168b924ade9c458fab8; hijup={%22intl%22:{%22currentLanguage%22:%22id%22%2C%22currentReg' +
        'ion%22:%22ID%22}%2C%22selectedCurrency%22:%22IDR%22%2C%22user%22:{%22orderHistory%22:[]%2C%22pointHistories%22:[]}%2C%22use' +
        'rSession%22:{%22token%22:null}}; optiMonkClient={"30874":{"fv":1549294415,"lv":1549294415,"nopv":1,"ca":{"17":{"act":0,"cr"' +
        ':"5c1cc58304bd330027abb078","s":"init","tua":0,"nod":0,"app":0},"18":{"act":0,"cr":"5c1ccd6feddadb0027e9dbba","s":"init","t' +
        'ua":0,"nod":0,"app":0},"19":{"act":0,"cr":"5c1cce6aeddadb0027e9dbbf","s":"init","tua":0,"nod":0,"app":0},"20":{"act":0,"cr"' +
        ':"5c1cd0f0eddadb0027e9dbdb","s":"init","tua":0,"nod":0,"app":0}}}}; optiMonkSession=1549294414; cto_lwid=aa13af19-005f-4b09' +
        '-8c69-c0168453613f; scs=%7B%22t%22%3A1%7D; insdrSV=1; ins-gaSSId=62f4953b-a963-fe82-7b55-95fdbf558cad_1549294419; _hjInclud' +
        'edInSample=1; ins-mig-done=1; spUID=15492944193210660399471.8b76dc8a; ins-product-id=51355; current-currency=IDR; _gat_UA-2' +
        '4817580-1=1; _gat_hijup20=1; _gat=1; _td=de69a749-963a-4da5-b5fb-40dc76c543d8; _gat_UA-24817580-9=1'
    }

    getVariables (page = 1) {
        const vars = {
            'basic_colors': [],
            'category_names': [],
            'price': [],
            'keywords': null,
            'permalink': null,
            'price_ranges': [],
            'only_new': false,
            'max_price': null,
            'page': page,
            'per_page': 100,
            'vendor_names': [],
            'discounts': null,
            'ids': [],
            'tags': [],
            'locale': 'id',
            'min_price': null,
            'sort': 'Newest',
            'show_all': false,
            'category_slug': null,
            'slug_name': '',
            'slug_type': 'all_products',
            'currency': 'IDR'
        }
        return vars
    }

    getExtension () {
        return {
            'persistedQuery': {
                'version': 1,
                'sha256Hash': '6de27fe01de2429a9af63eabd0f2e3bdb9e619f182addea8b9a0f550043b9662'
            }
        }
    }

    async run (type) {
        utils.debugme(`running run ${type}`)
        // import from web hijup.com
        if (type === 'import_categories' || type === 'all') await this.importCategories()
        if (type === 'import_products' || type === 'all') await this.getAllProducts()
        if (type === 'import_details' || type === 'all') await this.getProductDetail()
        // import from db
        if (type === 'update_categories' || type === 'all') await this.importLocalCategories()
        if (type === 'update_products' || type === 'all') await this.importLocalProducts()
    }

    async importLocalProducts () {
        if (!this.currentSkip) {
            this.currentSkip = 0
        }
        try {
            const raw = await RawHijupProducts
                .find({})
                .limit(localLimit)
                .skip(this.currentSkip)
            /* running without sync */
            this.updateProducts(raw)
            if (typeof raw === 'object' && raw.length === 0) {
                this.currentSkip = 0
                return null
            }
            this.currentSkip += localLimit
        } catch (e) {
            utils.debugme(e.message)
        }
    }

    updateProducts (raw) {
        try {
            const products = raw.map(x => {
                const favorites = _.random(0, 50)
                return {
                    id: md5(`${prefix}_${x.id}`),
                    name: x.name,
                    gender: x.gender,
                    slug: `${x.name.toLowerCase().replace(/ /g, '-')}_${x.id}`,
                    category_id: md5(`${prefix}_${x.category.id}`),
                    status: {
                        trash: false,
                        suspend: false,
                        ready: false,
                        available: false,
                        preorder: false
                    },
                    source: {
                        id: x.id,
                        type: prefix
                    },
                    images: {
                        main: x.image.big,
                        others: [
                            x.image.smaller
                        ]
                    },
                    brand: md5(`${prefix}_${x.vendor.id}`),
                    favorites: {
                        count: favorites,
                        by: []
                    },
                    stars: {
                        count: favorites / 10
                    }
                }
            })
            const variants = raw.map(x => ({
                id: `variant_${prefix}_${x.id}`,
                product_id: md5(`${prefix}_${x.id}`),
                items: x.variants.map(o => ({
                    units: o.units.map((i) => ({
                        stock: i.stock,
                        size_label: i.size_label
                    })),
                    color: o.color_name,
                    images: o.images.map(img => ({
                        default: img.default,
                        small: img.smaller,
                        big: img.big
                    }))
                })),
                status: {
                    trash: false
                }
            }))
            const prices = raw.map(x => ({
                id: `price_${prefix}_${x.id}`,
                product_id: md5(`${prefix}_${x.id}`),
                source: x.prices,
                price: Number(x.prices.raw_final) + 50000,
                discount: {
                    type: 'percent', // percent or nominal
                    value: 0
                },
                status: {
                    trash: false,
                    pending: false
                }
            }))
            const brands = raw.map(x => ({
                id: md5(`${prefix}_${x.vendor.id}`),
                name: x.vendor.name,
                source: {
                    id: x.vendor.id
                }
            }))
            this.upsertMany(products, StoreProducts)
            // this.upsertMany(prices, StoreProductPrices)
            // this.upsertMany(variants, StoreProductVariants)
            // this.upsertMany(brands, StoreProductBrands)
        } catch (e) {
            console.log(e)
        }
    }

    async getProductDetail () {
        utils.debugme('get detail products')
        const dateNow = new Date().getTime()
        const pengurang = 1 * 24 * 60 * 60 * 1000
        const dateCriteria = new Date(dateNow - pengurang)
        const q = RawHijupProducts.find({
            'last_recrawl.detail': {
                $gte: dateCriteria
            }
            // last_recrawl: {
            //     $exists: false
            // }
        }).select('id') // .limit(1)
        q.exec(async (err, res) => {
            if (err) {
                throw err
            }
            for (let d of res) {
                if (!d) break
                const detail = await this.getDetail(d.id)
                if (detail) {
                    utils.debugme(`updating document: ${detail.id} (success)`)
                    RawHijupProducts.updateOne({id: detail.id}, {
                        $set: {
                            'last_recrawl.detail': new Date(),
                            'last_recrawl.product': new Date()
                        }
                    }, (e, r) => {
                        if (e) console.log(e.message)
                        utils.log(`product updated: ${_.result(r, 'upserted', {}).length || 0}, updated: ${r.nModified}`)
                    })
                    RawHijupProductsDetail
                        .updateOne({id: detail.id}, detail, {upsert: true}, (e, r) => {
                            if (e) console.log(e.message)
                            utils.log(`detail updated: ${_.result(r, 'upserted', {}).length || 0}, updated: ${r.nModified}`)
                        })
                } else {
                    utils.debugme(`updating document: ${detail} (failed)`)
                }
            }
        })
    }

    getDetail (id = 0) {
        return new Promise((resolve, reject) => {
            got
                .get(graphUrl, {
                    query: new URLSearchParams({
                        operationName: 'Product',
                        variables: `{"id":${id},"locale":"id","currency":"IDR"}`,
                        extensions: '{"persistedQuery":{"version":1,"sha256Hash":"41efa4e6316a05410dc67f36a64905065477f2a31f2415f40a7091db6e6a826c"}}'
                    }).toString()
                })
                .then((res) => {
                    const body = JSON.parse(res.body)
                    const detail = _.result(body, 'data.product', null)
                    resolve(detail)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    async importCategories () {
        utils.debugme('import categories from hijup.com')
        got
            .get(graphUrl, {
                query: new URLSearchParams({
                    operationName: 'Categories',
                    variables: '{"locale":"id"}',
                    extensions: '{"persistedQuery":{"version":1,"sha256Hash":"afbfa4db7308e0f03b295ed6e2d05b4d63061488ebc42191b1e593da74c9b95a"}}'
                }).toString()
            })
            .then((res) => {
                const data = _.result(JSON.parse(res.body), 'data.categories', [])
                this.upsertMany(data, RawHijupCategories)
            })
            .catch((err) => {
                console.log(err)
            })
        return null
    }
    // import from raw to product_categories
    async importLocalCategories () {
        utils.debugme('update categories to store_categories')
        const data = await RawHijupCategories.find({})
        // console.log(data)
        this.upsertMany(this.mappingToCategories(data), StoreCategories)
    }

    mappingToCategories (data = []) {
        return data
            .map(x => ({
                id: md5(`${prefix}_${x.id}`),
                name: x.name,
                icon: x.icon,
                order: x.order,
                parent_id: x.parent_id ? md5(`${prefix}_${x.parent_id}`) : '',
                slug: x.slug,
                source: {
                    id: x.id,
                    type: prefix
                }
            }))
    }

    async getAllProducts () {
        let n = 1
        const qs = {
            operationName: 'Search',
            variables: JSON.stringify(this.getVariables(n)),
            extensions: JSON.stringify(this.getExtension())
        }
        let r = await this.getData(graphUrl, {qs})
        this.upsertMany(r.products)
        delete r.products
        while (r.hasNext) {
            n += 1
            qs.variables = JSON.stringify(this.getVariables(n))
            r = await this.getData(graphUrl, {qs})
            utils.debugme(`n: ${n}, hasNext: ${r.hasNext}`)
            this.upsertMany(r.products, RawHijupProducts)
        }
    }

    upsertMany (data = [], M) {
        utils.debugme('updating data to raw collection')
        if (data.length === 0) return null
        let i = 1
        const bulk = M.collection.initializeOrderedBulkOp()
        for (const x of data) {
            utils.debugme(`upserting data ${i}: ${x.id}`)
            bulk.find({id: x.id}).upsert().updateOne(x)
            i += 1
        }
        bulk.execute(function (e, r) {
            utils.log(`upserted: ${r.nUpserted}, updated: ${r.nModified}`)
        })
    }

    getData (url = '', opt = {}) {
        return new Promise((resolve, reject) => {
            utils.debugme('requesting data')
            got
                .get(url, {
                    query: new URLSearchParams(opt.qs).toString(),
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                        'referer': 'https://www.hijup.com/id/brands',
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
                        'cookies': this.getCookies()
                    }
                })
                .then((response) => {
                    const body = JSON.parse(response.body)
                    const products = _.result(body, 'data.search.products', [])
                    const currentPage = _.result(body, 'data.search.current_page', 1)
                    const totalPage = _.result(body, 'data.search.total_page', 1)
                    let hasNext = true
                    if (currentPage === totalPage) {
                        hasNext = false
                    }
                    resolve({
                        products,
                        hasNext
                    })
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}

module.exports = Hijup
