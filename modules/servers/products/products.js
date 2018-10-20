const conf = require('./products.conf')
const listenPort = conf.app_port || 8002

let restify = require('restify')
let server = restify.createServer()
let func = require('./products.func')
const cors = require('cors')
const prefix = '/products'

server.get(`${prefix}`, [func.main])
server.get(`${prefix}/hello`, [func.hello])
server.get(`${prefix}/world`, [func.world])

// CORS
const corsSettings = conf.cors
server.use(cors({
    'origin': corsSettings.domains.toString(),
    'methods': corsSettings.methods.toString(),
    'preflightContinue': false,
    'optionsSuccessStatus': 204
}))

server.listen(listenPort, function () {
    console.log('product\'s server is ready on %s', server.url)
})
