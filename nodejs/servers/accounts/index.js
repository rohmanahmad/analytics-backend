'use strict'

const PORT = process.env.PORT || 4000
let Core = require('../../__cores/Core')
const routes = require('./routes')
const controllers = {
    'Accounts': require('../../modules/controllers/Accounts'),
    'Documentations': require('../../modules/controllers/Documentations')
}
const middlewares = {
    'AuthToken': require('../../middlewares/Layer1AuthToken.middleware'),
    'InputValidation': require('../../middlewares/ValidateInput.middleware')
}

module.exports = {
    start: function () {
        console.log('staring ...')
        new Core({routes, middlewares, controllers})
            .startServer(PORT)
    }
}
