let restify = require('restify')
let func = require('./home.func')
let listener = require('../../globals/listener/http')
let Layer1AuthToken = require('../../globals/middlewares/Layer1AuthToken.middleware')
let server = restify.createServer()
const cors = require('cors')
const conf = require('./home.conf')
const listenPort = conf.app_port || 8000

const prefix = '/api'

listener.registerListener(server)
// build-in plugins
server.use(restify.plugins.queryParser());

const corsSettings = conf.cors
server.use(cors({
    'origin': corsSettings.domains.toString(),
    'methods': corsSettings.methods.toString(),
    'preflightContinue': false,
    'optionsSuccessStatus': 204
}))

server.get(`${prefix}`, [Layer1AuthToken.auth, func.main])
server.get(`${prefix}/world`, [func.world])

server.listen(listenPort, function () {
    console.log('home\'s server ready on %s', server.url)
})
