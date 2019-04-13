'use strict'

const got = use('got')
const md5 = use('md5')
const uuid = use('uuid')
const {queue} = use('async')
const Models = use('Models')
const OngkosCities = new Models().model('OngkosKirimIdCities.Model')
const OngkosKecamatans = new Models().model('OngkosKirimIdKecamatan.Model')
const Expedisi = new Models().model('OngkosKirimIdExpeditions.Model')
const Countries = new Models().model('OngkosKirimIdCountries.Model')
const Prices = new Models().model('OngkosKirimIdPrice.Model')

const client = got.extend({
    baseUrl: 'https://api.jejualan.com:443',
    headers: {
        'Authorization': 'Basic b25na2lya3UuamVqdWFsYW4uY29tOjlhOWRkZGYyNTM4NTAzZTY2MmU3YTIyYzcyMGFiYzYx'
    }
})

const n = Array.from({length: 100}, (x, i) => i)
const arrNumber = Array.from({length: 10}, (x, i) => i * 100)
const randomN = function () {
    const x = n[Math.floor(Math.random() * n.length)]
    return x
}
const randomMe = function () {
    const x = arrNumber[Math.floor(Math.random() * arrNumber.length)] * randomN()
    return x
}

class OngkosKirimID {
    async handle (args) {
        console.log('handle ongkos kirim id')
        let exitCode = 0
        try {
            // await this.exportCities()
            // await this.exportKecamatans()
            // await this.exportPengiriman()
            // await this.exportNegara()
            // await this.generateShippingPrice()
            // await this.exportShippingPrices()
            await this.exportByDB()
        } catch (e) {
            console.log(e)
            exitCode = 200
        }
        // process.exit(exitCode)
    }

    async exportCompanyExpeditions () {
        try {
            await this.getExpeditions()
        } catch (err) {
            throw err
        }
    }

    async doExport (query) {
        console.log('exporting prices')
        try {
            // let bulkUpdate = Prices.collection.initializeOrderedBulkOp()
            let worker = queue(async (data, next) => {
                const {_id, from, kec, city} = data
                const d = await this.getShippingPrice(from, city, kec, _id)
                // console.log({prices_detail: d, last_update: new Date()})
                Prices
                    .updateOne({_id}, {$set: {prices_detail: d, last_update: new Date()}})
                    .then(function () {
                        // write log
                    })
                next()
            }, 1)
            worker.drain = async function () {
                console.log('all process has been finished')
                // bulkUpdate.execute(function (err, res) {
                //     console.log(err, res)
                //     console.log('finish update all data')
                // })
            }
            for (let o of query) {
                worker.push(o, function () {
                    // console.log(`${o.from} => ${o.kec} <> ${o.city} finish`)
                })
            }
        } catch (err) {
            throw err
        }
    }

    async getEmptyPrice () {
        const skip = randomMe()
        console.log('get empty prices', skip)
        try {
            const query = await Prices.aggregate([
                {
                    $match: {
                        'status.available': true,
                        'prices_detail': {
                            '$size': 0
                        }
                    }
                },
                {
                    $project: {
                        'id': true,
                        'from': '$detail.from.id',
                        'kec': '$detail.destination.kec',
                        'city': '$detail.destination.city'
                    }
                },
                {
                    $skip: skip
                },
                {
                    $limit: 10
                }
            ])
            return query
        } catch (err) {
            throw err
        }
    }
    async exportByDB () {
        console.log('exporting by db')
        return new Promise(async (resolve, reject) => {
            try {
                const self = this
                const q1 = await self.getEmptyPrice()
                await self.doExport(q1)
                const interv = setInterval(async () => {
                    const query = await self.getEmptyPrice()
                    if (query.length <= 0) {
                        clearInterval(interv)
                        console.log('finish all data')
                        return resolve(true)
                    }
                    await self.doExport(query)
                }, 30 * 1000)
            } catch (err) {
                reject(err)
            }
        })
        // async.eachLimit()
    }
    async generateShippingPrice () {
        console.log('export shipping price')
        try {
            const cities = await OngkosCities.aggregate([
                {
                    $project: {
                        city_id: true,
                        city_name: true
                    }
                }
            ])
            const kec = await OngkosKecamatans.aggregate([
                {
                    $project: {
                        city_id: true,
                        kecamatan_id: true,
                        kecamatan_name: true
                    }
                },
                {
                    $group: {
                        _id: '$city_id',
                        name: {
                            $last: '$kecamatan_name'
                        },
                        sub_district: {
                            $addToSet: '$kecamatan_id'
                        }
                    }
                }
            ])
            let row = 1
            for (let ct of cities) {
                const asal = parseInt(ct.city_id || 0)
                // const asalName = ct.city_name || ''
                for (let sub of kec) {
                    const kotaTujuan = sub._id
                    // const kotaTujuanName = sub.name
                    if (sub.sub_district && sub.sub_district.length > 0) {
                        for (let kecId of sub.sub_district) {
                            let x = {}
                            x['id'] = uuid()
                            x['detail'] = {
                                from: {
                                    t: 'city',
                                    id: asal
                                },
                                destination: {
                                    city: kotaTujuan,
                                    kec: kecId
                                }
                            }
                            x['price'] = 0
                            x['created_at'] = new Date()
                            x['last_update'] = new Date()
                            x['status'] = {
                                'available': true,
                                'banned': false
                            }
                            console.log(row)
                            row += 1
                            await Prices.updateOne({id: x.id}, x, {upsert: true, setDefaultsOnInsert: true})
                        }
                    }
                }
            }
        } catch (e) {
            throw e
        }
    }
    async exportShippingPrices () {
        console.log('export shipping price')
        try {
            const cities = await OngkosCities.aggregate([
                {
                    $project: {
                        city_id: true,
                        city_name: true
                    }
                }
            ])
            const kec = await OngkosKecamatans.aggregate([
                // {
                //     $limit: 1
                // },
                {
                    $project: {
                        city_id: true,
                        kecamatan_id: true,
                        kecamatan_name: true
                    }
                },
                {
                    $group: {
                        _id: '$city_id',
                        name: {
                            $last: '$kecamatan_name'
                        },
                        sub_district: {
                            $addToSet: '$kecamatan_id'
                        }
                    }
                }
            ])
            for (let ct of cities) {
                const asal = parseInt(ct.city_id || 0)
                const asalName = ct.city_name || ''
                for (let sub of kec) {
                    const kotaTujuan = sub._id
                    const kotaTujuanName = sub.name
                    if (sub.sub_district && sub.sub_district.length > 0) {
                        for (let kecId of sub.sub_district) {
                            const c = await this.getShippingPrice(asal, kotaTujuan, kecId)
                            for (let x of c) {
                                console.log(`(${x.shipping.name}) ${asalName} -> ${kotaTujuanName} -> ${kecId}`)
                                x['detail'] = {
                                    from: {
                                        t: 'city',
                                        id: asal
                                    },
                                    destination: {
                                        city: kotaTujuan,
                                        kec: kecId
                                    }
                                }
                                x['last_update'] = new Date()
                                await Prices.updateOne({id: x.id}, x, {upsert: true, setDefaultsOnInsert: true})
                            }
                        }
                    }
                }
            }
        } catch (e) {
            throw e
        }
    }
    // besok tinggal jalankan
    async getShippingPrice (asal, tujuanKota, tujuanKec, id) {
        try {
            console.log(`${id} | /v1/shippings/city/${tujuanKota}/subdistrict/${tujuanKec}/price?from_city_id=${asal}&no_cod=1`)
            const d = await client
                .get(`/v1/shippings/city/${tujuanKota}/subdistrict/${tujuanKec}/price?from_city_id=${asal}&no_cod=1`)
            const body = JSON.parse(d.body)
            if (typeof body === 'object') {
                let arr = []
                for (let b in body) {
                    const x = body[b]
                    let nObj = {}
                    nObj['shipping_id'] = parseInt(x.company_id)
                    nObj['shipping_name'] = x.company_name
                    nObj['shipping_price'] = parseInt(x.price)
                    nObj['shipping_price_id'] = parseInt(x.shipping_price_id || '0')
                    arr.push(nObj)
                }
                return arr
            }
            return []
        } catch (e) {
            console.log(e)
        }
    }
    // Nama Perusahaan Pengiriman
    async exportNegara () {
        console.log('export negara')
        const c = await this.getCompanyNegara()
        for (let a of c) {
            console.log('updating data company', a.name)
            await Countries.updateOne({id: a.id}, a, {upsert: true})
        }
    }
    async getCompanyNegara () {
        console.log('export company negara')
        try {
            const d = await client
                .get(`/v1/shippings/countries`)
            const body = JSON.parse(d.body)
            const data = body.map(x => {
                let newObj = {}
                newObj['id'] = md5(x.country_name)
                newObj['name'] = x.country_name
                newObj['website'] = ''
                newObj['last_update'] = new Date()
                newObj['status'] = {
                    'available': true,
                    'banned': false
                }
                newObj['options'] = {
                    'country_id': x.country_id,
                    'country_code': x.country_code,
                    'currency_code': x.currency_code,
                    'weight_unit': x.weight_unit,
                    'dimension_unit': x.dimension_unit,
                    'location_type': parseInt(x.location_type)
                }
                newObj['region'] = x.region
                return newObj
            })
            return data
        } catch (e) {
            throw e
        }
    }
    // Nama Perusahaan Pengiriman
    async exportPengiriman () {
        console.log('export pengiriman')
        const c = await this.getCompanyPengiriman()
        for (let a of c) {
            console.log('updating data company', a.name)
            await Expedisi.updateOne({id: a.id}, a, {upsert: true})
        }
    }
    async getCompanyPengiriman () {
        console.log('export company pengiriman')
        try {
            const d = await client
                .get(`/v1/shippings/companies`)
            const body = JSON.parse(d.body)
            const data = body.map(x => {
                let newObj = {}
                newObj['id'] = md5(x.comp_name)
                newObj['name'] = x.comp_name
                newObj['last_update'] = new Date()
                newObj['status'] = {
                    'available': true,
                    'banned': false
                }
                newObj['company'] = {
                    'id': parseInt(x.comp_id),
                    'name': x.comp_name,
                    'description': x.comp_desc,
                    'origin': 'ongkoskirimid'
                }
                newObj['options'] = {
                    'cek_resi_url': x.status_url,
                    'international_service': parseInt(x.is_international) === 1
                }
                return newObj
            })
            return data
        } catch (e) {
            throw e
        }
    }
    // KECAMATANS
    async exportKecamatans () {
        console.log('export kecamatan')
        try {
            for (let id = 231; id <= 454; id++) {
                const c = await this.getKecamatans(id)
                for (let a of c) {
                    console.log('updating data kecamatan', a.kecamatan_name)
                    await OngkosKecamatans.updateOne({id: a.id}, a, {upsert: true})
                }
            }
        } catch (e) {
            throw e
        }
    }
    async getKecamatans (id = 0) {
        try {
            console.log('getting', id)
            const d = await client
                .get(`/v1/shippings/${id}/kecamatan`)
            const body = JSON.parse(d.body)
            const data = body.map(x => {
                x['id'] = md5(x.kecamatan_id)
                x['last_update'] = x.last_update.indexOf('0000-00-00') > -1 ? '1990-01-01 00:00:00' : x.last_update
                x['kodepos_result'] = x['kodepos_result'].indexOf('[') > -1 ? JSON.parse(x['kodepos_result']) : []
                x['kodepos_indonesia_result'] = x['kodepos_indonesia_result'].indexOf('[') > -1 ? JSON.parse(x['kodepos_indonesia_result']) : []
                return x
            })
            return data
        } catch (e) {
            throw e
        }
    }
    // CITIES
    async exportCities () {
        console.log('export cities')
        try {
            for (let id = 1; id <= 33; id++) {
                const c = await this.getCities(id)
                for (let a of c) {
                    console.log('updating data city', a.city_name)
                    await OngkosCities.updateOne({id: a.id}, a, {upsert: true})
                }
            }
        } catch (e) {
            throw e
        }
    }
    async getCities (id = 0) {
        try {
            console.log('getting', id)
            const d = await client
                .get(`/v1/shippings/${id}/city`)
            const body = JSON.parse(d.body)
            console.log(body)
            const data = body.map(x => {
                x['id'] = md5(x.city_id)
                x['last_update'] = x.last_update.indexOf('0000-00-00') > -1 ? '1990-01-01 00:00:00' : x.last_update
                x['kodepos_result'] = x['kodepos_result'].length > 0 ? JSON.parse(x['kodepos_result']) : []
                x['kodepos_indonesia_result'] = x['kodepos_indonesia_result'].length > 0 ? JSON.parse(x['kodepos_indonesia_result']) : []
                return x
            })
            return data
        } catch (e) {
            throw e
        }
    }
}

module.exports = OngkosKirimID
