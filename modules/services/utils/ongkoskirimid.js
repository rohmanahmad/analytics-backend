'use strict'

const got = use('got')
const md5 = use('md5')
const Models = use('Models')
const OngkosCities = new Models().model('OngkosKirimIdCities.Model')
const OngkosKecamatans = new Models().model('OngkosKirimIdKecamatan.Model')

const client = got.extend({
    baseUrl: 'https://api.jejualan.com:443',
    headers: {
        'Authorization': 'Basic b25na2lya3UuamVqdWFsYW4uY29tOjlhOWRkZGYyNTM4NTAzZTY2MmU3YTIyYzcyMGFiYzYx'
    }
});

class OngkosKirimID {
    async handle (args) {
        let exitCode = 0
        try {
            // await this.exportCities()
            await this.exportKecamatans()
        } catch (e) {
            console.log(e)
            exitCode = 200
        }
        process.exit(exitCode)
    }
    // KECAMATANS
    async exportKecamatans () {
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
