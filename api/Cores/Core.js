'use strict'

const path = require('path')
const bunyan = require('bunyan')

const appName = process.env.APP_NAME || 'app-1'
const isDevelopment = (process.env.NODE_ENV === 'development')

module.exports = global.debuglog = isDevelopment ? console : bunyan.createLogger({
    name: appName,
    streams: [
        {
            level: 'info',
            type: 'rotating-file',
            period: '1d', // daily rotation
            count: 3, // keep 3 back copies
            path: path.resolve(`/logs/${appName}.debug.log`) // log INFO and above to stdout
        },
        {
            level: 'error',
            type: 'rotating-file',
            period: '1d', // daily rotation
            count: 3, // keep 3 back copies
            path: path.resolve(`/logs/${appName}.error.log`) // log ERROR and above to a file
        }
    ]
})

module.exports = global.use = function (moduleName) {
    try {
        let md = path.resolve(path.join('Application/', moduleName))
        if (moduleName.indexOf('/Base/') === 0) {
            md = path.resolve(path.join('Cores', moduleName))
        } else if (moduleName.indexOf('/Core') === 0) {
            md = path.resolve(path.join('Cores', moduleName))
        }
        return require(md.replace('//', '/').replace('/./', '/'))
    } catch (err) {
        debuglog.error(err)
    }
}

const MongoDB = require('./Providers/Mongodb')

module.exports = {
    loadController: function (controllerPath = '') {
        return use(path.join('Modules', controllerPath))
    },
    loadMiddleware: function (middleFile = '') {
        return use(path.join('Middlewares', middleFile))
    },
    loadModelConfig: async function (modelname = '') {
        try {
            const splitter = modelname.split('/')
            const filename = modelname.split('/').pop() || ''
            const folderL1 = splitter.length >= 2 ? splitter[0] : filename
            const p = splitter.filter(x => x !== filename)
            let filePath = []
            if (p.length > 0) {
                filePath = p.filter(x => x !== folderL1)
            }
            filePath = filePath.join('/')
            const fullpathConfig = path.join('Modules', folderL1, 'Models', filePath, `${filename}.Config`)
            const fullpathModel = path.join('Modules', folderL1, 'Models', filePath, `${filename}.Model`)
            const ModelExtends = use(fullpathModel)
            const {connection, collection, schema} = use(fullpathConfig)
            // console.log({fullpathModel, fullpathConfig})
            const xModel = new MongoDB(connection)
                .setSchema(schema)
                .bindClass(ModelExtends)
            const m = await xModel.model(collection)
            return m
        } catch (err) {
            throw err
        }
    }
}
