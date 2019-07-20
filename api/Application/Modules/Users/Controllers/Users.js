'use strict'

const BaseController = use('/Base/Controller')
const uuid = require('uuid')

let models = {}

class Users extends BaseController {
    constructor () {
        try {
            super()
            this.setupModel('Users').then(x => (models['users'] = x)).catch(err => { throw err })
        } catch (err) {
            throw err
        }
    }
    async Register (request, response) {
    }

    async Login (request, response, next) {
        try {
            const w = await models['users'].find()
            response.send(w)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Users
