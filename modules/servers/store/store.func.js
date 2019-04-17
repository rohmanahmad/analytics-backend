'use strict'

const _ = use('_')
const Models = use('Models')

const docs = use('modules/globals/static/documentation/stores.docs')

const StoreCategories = new Models().model('StoreCategories.Model')
const StoreProducts = new Models().model('StoreProducts.Model')
const StoreProductPrices = new Models().model('StoreProductPrices.Model')
const StoreProductVariants = new Models().model('StoreProductVariants.Model')
const StoreProductBrands = new Models().model('StoreProductBrands.Model')

const variantsByProductIds = async (productIds) => {
    let variants = await StoreProductVariants.find({
        product_id: {
            $in: productIds
        },
        'status.trash': false
    })
    return variants
}
const pricesByProductIds = async (productIds) => {
    let prices = await StoreProductPrices.find({
        product_id: {
            $in: productIds
        },
        'status.trash': false,
        'status.pending': false
    })
    return prices
}
class Store {
    async docs (request, response) {
        response.render('docs/index', docs.publish())
    }
    async apidocs (request, response) {
        const config = _.result(request.configs, 'documentation', '')
        response.json(docs.publish(config))
    }
    async main (request, response) {
        response.render('store/index')
    }
    async mobile (request, response) {
        const isDev = request.query.dev === 'true'
        response.render('store/mobile', {isDev})
    }
    async categories (request, response) {
        let criteria = {}
        let {id, slug, parent, sort} = request.query
        if (id) criteria['id'] = id
        if (slug) criteria['slug'] = slug
        if (parent) criteria['parent_id'] = parent
        let cat = await StoreCategories
            .find(criteria)
            .select(['id', 'name', 'icon', 'parent_id', 'order'])
        const parentCat = cat.filter(x => !x.parent)
        const grouplist = _.groupBy(cat, 'parent_id')
        let list = _.reduce(parentCat, (res, x) => {
            const obj = Object.assign({parent: {id: x.id, name: x.name, icon: x.icon, order: x.order}}, {
                childs: _.result(grouplist, x.id, null)
            })
            res.push(obj)
            return res
        }, [])
        sort = sort === 'desc' ? 'desc' : 'asc'
        list = _.orderBy(list, x => x.parent.name, sort)
        response.apiCollection(list)
    }
    async brands (request, response) {
        let criteria = {}
        let {id, sort} = request.query
        sort = sort === 'desc' ? 'desc' : 'asc'
        if (id) criteria['id'] = id
        let brands = await StoreProductBrands
            .find(criteria)
            .select(['id', 'name'])
            .sort({'name': sort})
        brands = brands.map(x => ({id: x.id, name: x.name}))
        response.apiCollection(brands)
    }
    async products (request, response) {
        try {
            let {categories, page, limit, settings, ids: prdIds} = request.query
            limit = parseInt(limit) > 0 ? parseInt(limit) : 10
            const skip = parseInt(page) > 0 ? parseInt(page) * limit : 0
            let criteria = {'status.suspend': false, 'status.trash': false}
            if (categories && categories.length > 0) {
                categories = categories.split(',').map(x => x.trim())
                criteria['category_id'] = categories
            }
            if (prdIds && prdIds.length > 0) {
                const ids = prdIds.split(',').map(x => x.trim())
                criteria['id'] = ids
            }
            let products = await StoreProducts
                .find(criteria)
                .limit(limit || 10)
                .skip(skip)
            const productids = products.map(x => x.id)
            let variants = await variantsByProductIds(productids)
            variants = _.reduce(variants, (r, x) => {
                r[x.product_id] = x.items
                return r
            }, {})
            let prices = await pricesByProductIds(productids)
            prices = _.reduce(prices, (r, x) => {
                r[x.product_id] = {
                    price: x.price,
                    discount: x.discount
                }
                return r
            }, {})
            products = products.map(x => ({
                product_id: x.id,
                category: x.category_id,
                name: x.name,
                gender: x.gender,
                slug: x.slug,
                brand: x.brand,
                images: x.images,
                variants: variants[x.id],
                prices: prices[x.id],
                favorites: x.favorites,
                stars: x.stars
            }))
            if (settings) {
                settings = _.reduce(settings.split(','), function (s, x) {
                    const k = x.split(':')
                    s[k[0]] = k[1]
                    return s
                }, {})
                let {perpage} = settings
                if (perpage && parseInt(perpage) > 0) {
                    perpage = parseInt(perpage)
                    const dv = Math.ceil(products.length / perpage)
                    products = _.range(dv).map(x => {
                        const c = x * perpage
                        return products.slice(c, perpage + c)
                    })
                }
            }
            response.apiCollection(products)
        } catch (e) {
            response.status(400).send(e.message)
        }
    }
    async productById (request, response) {
        let criteria = {}
        const {page, limit} = request.query
        if (page && parseInt(page) > 0) criteria['skip'] = page * limit
        if (limit && parseInt(limit) > 0) criteria['limit'] = limit
        const products = await StoreProducts.find()
        response.apiCollection([])
    }
}

module.exports = Store
