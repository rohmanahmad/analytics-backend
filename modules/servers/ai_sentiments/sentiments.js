let restify = require('restify');
let server = restify.createServer({
    // handleUncaughtExceptions: true
});
let cors = require('cors')
const conf = require('./sentiments.conf')
const listenPort = conf.app_port || 8003
let Func = require('./sentiments.func')
const os = require('os')
const ValidateInput = require('../../globals/middlewares/ValidateInput.middleware')
const HttpListener = require('../../globals/listener/http')
HttpListener.registerListener(server)
server.pre(function (request, response, next) {
    request['config'] = conf
    response.r = HttpListener.mapResponse(response)
    next()
})
const prefix = '/api/ai/vocabulary'
server.use(restify.plugins.bodyParser({
    maxBodySize: 0,
    mapParams: true,
    mapFiles: false,
    overrideParams: false,
    multipartHandler: function (part) {
        part.on('data', function (data) {
        // do something with the multipart data
        })
    },
    multipartFileHandler: function (part) {
        part.on('data', function (data) {
        // do something with the multipart file data
        })
    },
    keepExtensions: false,
    uploadDir: os.tmpdir(),
    multiples: true,
    hash: 'sha1',
    rejectUnknown: true,
    requestBodyOnGet: false,
    reviver: undefined,
    maxFieldsSize: 2 * 1024 * 1024
}))
server.use(restify.plugins.queryParser({ mapParams: false }))

// CORS
const corsSettings = conf.cors
server.use(cors({
    'origin': corsSettings.domains.toString(),
    'methods': corsSettings.methods.toString(),
    'preflightContinue': false,
    'optionsSuccessStatus': 204
}))

const f = new Func()

server.get(`${prefix}/`, [ValidateInput, f.vocabListAll])
server.put(`${prefix}/`, [ValidateInput, f.vocabUpdateOrDelete])
server.get(`${prefix}/:id`, [ValidateInput, f.vocabListOne])
server.post(`${prefix}/create`, [ValidateInput, f.createOne])

server.listen(listenPort, function () {
    console.log('sentiment\'s server ready on %s', server.url)
});
