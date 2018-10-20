let restify = require('restify');
let cors = require('cors')
let server = restify.createServer({
    // handleUncaughtExceptions: true
});
const conf = require('./users.conf')
const listenPort = conf.app_port || 8001
let func = require('./users.func')
const os = require('os')
const errors = require('restify-errors');
const HttpListener = require('../../globals/listener/http')
const ValidateInput = require('../../globals/middlewares/ValidateInput.middleware')

HttpListener.registerListener(server)

const prefix = '/api/users'

server.use(restify.plugins.bodyParser({
    maxBodySize: 0,
    mapParams: true,
    mapFiles: false,
    overrideParams: false,
    multipartHandler: function (part) {
        part.on('data', function (data) {
        // do something with the multipart data
        });
    },
    multipartFileHandler: function (part) {
        part.on('data', function (data) {
        // do something with the multipart file data
        });
    },
    keepExtensions: false,
    uploadDir: os.tmpdir(),
    multiples: true,
    hash: 'sha1',
    rejectUnknown: true,
    requestBodyOnGet: false,
    reviver: undefined,
    maxFieldsSize: 2 * 1024 * 1024
}));

const corsSettings = conf.cors
server.use(cors({
    'origin': corsSettings.domains.toString(),
    'methods': corsSettings.methods.toString(),
    'preflightContinue': false,
    'optionsSuccessStatus': 204
}))

server.get(`${prefix}`, [func.main])
server.post(`${prefix}/login`, [ValidateInput, func.login])

server.listen(listenPort, function () {
    console.log('user\'s server ready on %s', server.url)
});
