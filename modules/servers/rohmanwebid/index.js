'use strict'

const Deps = use('Deps.Loader')
const basePath = Deps.basePath
const Express = Deps.Express
const Cors = Deps.Cors
const BodyParser = Deps.BodyParser
const Http = Deps.Http
const Compression = Deps.Compression
const path = Deps.path
const app = Express()
const server = Http.createServer(app)
const utils = use('Utils.Helper')
const HttpResponse = use('Http.Response')
// const ValidateInput = use('ValidateInput.Middleware')

const {port} = require('./rohmanwebid.conf')
const Routes = require('./rohmanwebid.routes')

const prefix = '/rohmanwebid'
const publicPath = path.join(basePath, 'public')
// set pug as default engine
app.use(Express.static('public'))
app.set('views', publicPath)
app.set('view engine', 'pug')

// set group routes
app.use(function (request, response, next) {
    utils.debugme(`accessing : ${request.originalUrl}`)
    request.router_group = 'shares'
    next()
})
// enable trust-proxy
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
// enable compression
app.use(Compression())
// enable cors in all routes
app.use(Cors())
// parse various different custom JSON types as JSON
app.use(BodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(BodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(BodyParser.urlencoded({ extended: true }))

// parse an HTML body into a string
app.use(BodyParser.text({ type: 'text/html' }))

app.use(HttpResponse)

// registering user's routers
Routes.register(app, prefix)

module.exports = {
    start: function (newport) {
        const workerId = this.workerId ? ' |-- workerID: ' + this.workerId : false
        newport = newport || port
        server.listen(newport)
        utils.log('rohmanwebid server listen on port: ' + newport)
        if (workerId) utils.log(workerId)
    },
    cluster: function (worker) {
        this.workerId = worker.id
        return this
    }
}
