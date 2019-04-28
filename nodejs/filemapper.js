'use strict'

const nameSpaces = {
    'CORE': './__cores/core',
    // CONFIGS
    'model_mapping': './configs/model_mapping_db',
    'databases_conf': './configs/databases',
    // HELPERS
    'Utils.Helper': './helpers/utils.helper',
    'Http.Response': './utilities/listener/response',
    // LIBS
    'ErrorHandler': './libraries/ErrorHandler.lib',
    'Models': './libraries/Models.lib',
    'Registry': './libraries/Registry.lib',
    'SentencesLib': './libraries/Sentences.lib',
    // MIDDLEWARES
    'RequestLogger.Middleware': './middlewares/RequestLogger.middleware',
    'Layer1AuthToken.Middleware': './middlewares/Layer1AuthToken.middleware',
    'Layer1AuthSession.Middleware': './middlewares/Layer1AuthSession.middleware',
    'ValidateInput.Middleware': './middlewares/ValidateInput.middleware',
    // MODELS
    'Logs.Model': './modules/models/mongodb/Logs.model',
    'Patterns.Model': './modules/models/mongodb/Patterns.model',
    'Users.Model': './modules/models/mongodb/Users.model',
    'Vocabularies.Model': './modules/models/mongodb/Vocabularies.model',
    'LoginLogs.Model': './modules/models/mongodb/LoginLogs.model',
    'ShortLink.Model': './modules/models/mongodb/ShortLink.model',
    'InvalidRequestLog.Model': './modules/models/mongodb/InvalidRequestLog.model',
    'InvitationContacts.Model': './modules/models/mongodb/InvitationContacts.model',
    'Genders.Model': './modules/models/mongodb/Genders.model',
    'NameList.Model': './modules/models/mongodb/NameList.model',
    'RawHijupProducts.Model': './modules/models/mongodb/RawHijupProducts.model',
    'RawHijupCategories.Model': './modules/models/mongodb/RawHijupCategories.model',
    'RawHijupProductsDetail.Model': './modules/models/mongodb/RawHijupProductsDetail.model',
    'StoreCategories.Model': './modules/models/mongodb/StoreCategories.model',
    'StoreProducts.Model': './modules/models/mongodb/StoreProducts.model',
    'StoreProductDetail.Model': './modules/models/mongodb/StoreProductDetail.model',
    'StoreProductVariants.Model': './modules/models/mongodb/StoreProductVariants.model',
    'StoreProductPrices.Model': './modules/models/mongodb/StoreProductPrices.model',
    'StoreProductBrands.Model': './modules/models/mongodb/StoreProductBrands.model',
    'Province.Model': './modules/models/mongodb/Province.model',
    'Cities.Model': './modules/models/mongodb/Cities.model',
    'OngkosKirimIdExpeditions.Model': './modules/models/mongodb/OngkosKirimIdExpeditions.model',
    'OngkosKirimIdCities.Model': './modules/models/mongodb/OngkosKirimIdCities.model',
    'OngkosKirimIdKecamatan.Model': './modules/models/mongodb/OngkosKirimIdKecamatan.model',
    'OngkosKirimIdCountries.Model': './modules/models/mongodb/OngkosKirimIdCountries.model',
    'OngkosKirimIdPrice.Model': './modules/models/mongodb/OngkosKirimIdPrice.model',
    // SERVICES
    'hijup': './modules/services/stores/hijup',
    'expedition': './modules/services/stores/expedition',
    'cities': './modules/services/utils/cities',
    'province': './modules/services/utils/province',
    'ongkoskirimid': './modules/services/utils/ongkoskirimid',
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

module.exports = global.use = function (name) {
    const moduleName = nameSpaces[name] || false
    if (moduleName) {
        return require(moduleName)
    } else {
        return require('./' + name)
    }
}

require('dotenv').config({path: '.env'})
const mongoose = require('mongoose')

module.exports = global.MongoID = mongoose.Schema.Types.ObjectId
module.exports = global.appPath = __dirname
