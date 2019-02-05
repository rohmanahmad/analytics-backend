'use strict'

const nameSpaces = {
    // CONFIGS
    'model_mapping': './configs/model_mapping_db',
    'databases_conf': './configs/databases',
    // SERVER CONFIGS
    'admin': './configs/admin.conf',
    'default': './configs/default.conf',
    'events': './configs/events.conf',
    'home': './configs/home.conf',
    'malangsoftware': './configs/malangsoftware.conf',
    'rohmanwebid': './configs/rohmanwebid.conf',
    'sentiments': './configs/sentiments.conf',
    'shares': './configs/shares.conf',
    'store': './configs/store.conf',
    'users': './configs/users.conf',
    // HELPERS
    'Utils.Helper': './modules/globals/helpers/utils.helper',
    'Settings.Helper': './modules/globals/helpers/Settings.helper',
    'Http.Response': './modules/globals/listener/response',
    'All.Routes': './modules/globals/routes/all.routes',
    // LIBS
    'ErrorHandler': './modules/globals/libs/ErrorHandler.lib',
    'Models': './modules/globals/libs/Models.lib',
    'Registry': './modules/globals/libs/Registry.lib',
    'SentencesLib': './modules/globals/libs/Sentences.lib',
    // MIDDLEWARES
    'RequestLogger.Middleware': './modules/globals/middlewares/RequestLogger.middleware',
    'Layer1AuthToken.Middleware': './modules/globals/middlewares/Layer1AuthToken.middleware',
    'Layer1AuthSession.Middleware': './modules/globals/middlewares/Layer1AuthSession.middleware',
    'ValidateInput.Middleware': './modules/globals/middlewares/ValidateInput.middleware',
    // MODELS
    'Logs.Model': './modules/globals/models/mongodb/Logs.model',
    'Patterns.Model': './modules/globals/models/mongodb/Patterns.model',
    'Users.Model': './modules/globals/models/mongodb/Users.model',
    'Vocabularies.Model': './modules/globals/models/mongodb/Vocabularies.model',
    'LoginLogs.Model': './modules/globals/models/mongodb/LoginLogs.model',
    'ShortLink.Model': './modules/globals/models/mongodb/ShortLink.model',
    'InvalidRequestLog.Model': './modules/globals/models/mongodb/InvalidRequestLog.model',
    'InvitationContacts.Model': './modules/globals/models/mongodb/InvitationContacts.model',
    'RawHijupProducts.Model': './modules/globals/models/mongodb/RawHijupProducts.model',
    'RawHijupCategories.Model': './modules/globals/models/mongodb/RawHijupCategories.model',
    'RawHijupProductsDetail.Model': './modules/globals/models/mongodb/RawHijupProductsDetail.model',
    // SERVICES
    'hijup': './modules/services/stores/hijup',
    // DEPENDENCIES
    '_': 'lodash',
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
const mongod = require('mongodb')
const mongoose = require('mongoose')
const Env = process.env

const ObjectId = mongod.ObjectId
const mongooseObjID = mongoose.Schema.Types.ObjectId

const statics = {
    Env,
    mongooseObjID,
    ObjectId
}

module.exports = global.useStatic = function (name) {
    if (!statics[name]) {
        throw new Error(`${name} is not defined on static! please check.`)
    }
    return statics[name]
}
