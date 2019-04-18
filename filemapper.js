'use strict'

const nameSpaces = {
    // SERVER CONFIGS
    'malangsoftware': './configs/malangsoftware.conf',
    // HELPERS
    'Utils.Helper': './modules/globals/helpers/utils.helper',
    'Http.Response': './modules/globals/listener/response',
    // LIBS
    'ErrorHandler': './modules/globals/libs/ErrorHandler.lib',
    'Registry': './modules/globals/libs/Registry.lib',
    // MIDDLEWARES
    'RequestLogger.Middleware': './modules/globals/middlewares/RequestLogger.middleware',
    'Layer1AuthToken.Middleware': './modules/globals/middlewares/Layer1AuthToken.middleware',
    'Layer1AuthSession.Middleware': './modules/globals/middlewares/Layer1AuthSession.middleware',
    'ValidateInput.Middleware': './modules/globals/middlewares/ValidateInput.middleware',
    // DEPENDENCIES
    '_': 'lodash',
    'async': 'async',
    'BodyParser': 'body-parser',
    'Compression': 'compression',
    'Cors': 'cors',
    'debug': 'debug',
    'Express': 'express',
    'got': 'got',
    'Http': 'http',
    'jwt': 'jsonwebtoken',
    'md5': 'md5',
    'minimist': 'minimist',
    'mongod': 'mongodb',
    'moment': 'moment',
    'mongoose': 'mongoose',
    'optimist': 'optimist',
    'path': 'path',
    'session': 'express-session',
    'uuid': 'uuid',
    'util': 'util'
}

const path = require('path')

const myBasePath = function (file = '') {
    return path.resolve(file)
}

module.exports = global.basePath = function (file = '') {
    return myBasePath(file)
}

module.exports = global.use = function (name) {
    const moduleName = nameSpaces[name] || false
    if (moduleName) {
        return require(moduleName)
    } else {
        return require('./' + name)
    }
}

require('dotenv').config({path: myBasePath('.env')})
const Env = process.env

const statics = {
    Env
}

module.exports = global.useStatic = function (name) {
    if (!statics[name]) {
        throw new Error(`${name} is not defined on static! please check.`)
    }
    return statics[name]
}
