'use strict'

const namespace = 'genderize'
const Express = use('Express')
const Cors = use('Cors')
const BodyParser = use('BodyParser')
const Http = use('Http')
const Compression = use('Compression')
// registering Express Engine
const app = Express()
const appRouter = Express.Router()
const server = Http.createServer(app)

// loading all libs and helpers
const utils = use('Utils.Helper')
const HttpResponse = use('Http.Response')
const Settings = use('Settings.Helper')
const Registry = use('Registry')
// const ValidateInput = use('ValidateInput.Middleware')

const {port} = Settings(namespace)
const routes = require(`./${namespace}.routes`)
const controllers = require(`./${namespace}.func`)

const publicPath = basePath('public')
// set pug as default engine
app.use(Express.static('public'))
app.set('views', publicPath)
app.set('view engine', 'pug')

// set group routes
app.use(function (request, response, next) {
    utils.debugme(`accessing : ${request.originalUrl}`)
    request.configs = Settings(namespace)
    request.router_group = namespace
    request.router_prefix = `/${namespace}`
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
// require middlewares
const auth = use('Layer1AuthToken.Middleware')
const input = use('ValidateInput.Middleware')

// console.log(controllers)
// registering user's routers
new Registry(appRouter)
    .setControllerObj(controllers)
    .setMiddlewareObj({
        input, auth
    })
    .initialDocumentation()
    .registerRoutes(routes, namespace)
    .releaseRoutes(app)

module.exports = {
    start: function (newport) {
        const workerId = this.workerId ? ' |-- workerID: ' + this.workerId : false
        newport = newport || port
        server.listen(newport)
        utils.log(`${namespace} server listen on port: ` + newport)
        if (workerId) utils.log(workerId)
    },
    cluster: function (worker) {
        this.workerId = worker.id
        return this
    }
}
