'use strict'

const auth = require('./Layer1AuthToken.middleware')
const input = require('./ValidateInput.middleware')

module.exports = {
    auth,
    input
}
