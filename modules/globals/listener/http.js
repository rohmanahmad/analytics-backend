'use strict'

const {LogModel} = use('Models.Loader')
const {md5} = use('Deps.Loader')

async function createLog (data, error) {
    console.log('creating error log')
    if (data) {
        let {spec} = data
        spec['created_at'] = new Date()
        spec['error'] = error
        spec['hash'] = md5(new Date())
        const log = await new LogModel().query()
        await log.db_collection.updateOne({'hash': spec['hash']}, {'$set': spec}, {'upsert': true});
    }
}
module.exports = {
    mapResponse: function (response) {
        return {
            apiCollection: function (items, obj) {
                obj = obj || {}
                let r = {
                    'status': 200,
                    'message': 'success',
                    'data': Object.assign(obj, {items})
                }
                response.send(r)
            }
        }
    },
    registerListener: async (server) => {
        server.on('NotFound', (req, res, err, next) => {
            console.log('route not found!')
            // return next()
        })
        server.on('InternalServer', (req, res, err, next) => {
            createLog(req.getRoute(), err.message)
            res.send(500, {status: 500, message: err.message})
            // return next()
        })
        server.on('uncaughtException', function (req, res, route, err) {
            createLog(route, err.message)
            res.send(400, {status: 400, message: err.message})
        })
    }
}
