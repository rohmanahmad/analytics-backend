'use strict'

let Core = require('../../__cores/core')
const routes = require('./routes')

const Env = process.env

const controllers = {
    'Documentations': require('../../modules/controllers/Documentations')
}
const middlewares = {}

module.exports = {
    start: function () {
        console.log('staring ...')
        new Core({routes, middlewares, controllers})
            .startServer(Env.PORT || 4001)
    }
}
