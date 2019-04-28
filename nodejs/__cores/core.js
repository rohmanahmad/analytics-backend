'use strict'

const mongoDBcore = require('./mongodb')
const _ = require('lodash')
const Express = use('Express')
const App = Express()
const Cors = use('Cors')
const BodyParser = use('BodyParser')
const Http = use('Http')
const Compression = use('Compression')
const helmet = require('helmet')
const methodOverride = require('method-override')
const expressWinston = require('express-winston')
const winston = require('winston')
const path = require('path')
const Router = Express.Router()
const PublicPath = '../views'
const Env = process.env

const defaultFn = function (req, res) {
    res
        .status(500)
        .json({
            status: 500,
            message: 'Internal Server Error',
            error: 'Invalid Controller'
        })
}

class APP {
    startApp () {
        try {
            Http.createServer(App).listen(this.port)
            console.log('app running to port', this.port)
        } catch (err) {
            throw err
        }
    }

    registerEnvironments () {
        let e = {}
        const p = Env.parsed
        for (let i in p) {
            e[i] = p[i]
        }
        process.env = e
    }

    listen (port) {
        this.port = (port || 3000)
        return this
    }

    register (params = {}) {
        try {
            this.mongos = {}
            this.registerEnvironments()
            this.mongodb()
            this.app()
            this.views()
            const {routes, middlewares, gMiddlewares, controllers} = params
            if (controllers) {
                this.registerControllers(controllers)
            }
            if (gMiddlewares) this.globalMiddlewares(gMiddlewares)
            if (middlewares) this.registerMiddlewares(middlewares)
            if (routes) this.routes(routes)
            this.views()
            return this
        } catch (err) {
            throw err
        }
    }

    mongodb () {
        this.mongos = {
            models: mongoDBcore('models'),
            connections: mongoDBcore('connections')
        }
    }

    app () {
        try {
            // enable trust-proxy
            App.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
            // enable compression
            App.use(Compression())
            // enable cors in all routes
            App.use(Cors())
            // parse various different custom JSON types as JSON
            App.use(BodyParser.json({ type: 'application/*+json' }))
            // parse some custom thing into a Buffer
            App.use(BodyParser.raw({ type: 'application/vnd.custom-type' }))
            App.use(BodyParser.urlencoded({ extended: true }))
            // parse an HTML body into a string
            App.use(BodyParser.text({ type: 'text/html' }))
            // enable helmet
            App.use(methodOverride())
            App.use(helmet())
            App.use(function (request, response, next) {
                console.log(request.originalUrl)
                next()
            })
            App.use(expressWinston.errorLogger({
                transports: [
                  new winston.transports.File({filename: path.join(Env.LOG_PATH, `${Env.APIS}.log`), level: 'error' }),
                  new winston.transports.Console({filename: path.join(Env.LOG_PATH, `${Env.APIS}.log`), level: 'error' })
                ],
                format: winston.format.combine(
                  winston.format.colorize(),
                  winston.format.json()
                )
            }))
        } catch (err) {
            throw err
        }
    }

    routes (routes = []) {
        return new Promise(async (resolve, reject) => {
            if (!routes[0]) throw new Error('Invalid Routes')
            try {
                for (let i of routes) {
                    const mw = i.middlewares.map(x => this.middlewares[x])
                    let controller = i.controller
                    if (typeof controller === 'string') {
                        const cSplit = controller.split('.')
                        const cName = cSplit[0]
                        const cFn = cSplit[1]
                        controller = cName ? this.controllers[cName] : defaultFn
                        controller = cFn ? controller[cFn] : controller
                        controller = await controller
                    } else if (typeof controller === 'function') {
                        // pass : nothing to changes
                    } else {
                        controller = defaultFn
                    }
                    Router[i.type](i.path, mw, controller)
                }
                App.use(Router)
            } catch (err) {
                reject(err)
            }
        })
    }

    views () {
        try {
            // set pug as default engine
            App.use(Express.static('public'))
            App.set('views', PublicPath)
            App.set('view engine', 'pug')
        } catch (err) {
            throw err
        }
    }

    registerMiddlewares (middlewares = {}) {
        this.middlewares = middlewares
    }

    registerControllers (c = {}) {
        this.controllers = c
    }

    globalMiddlewares () {
    }
}

class Core {
    constructor (params = {}) {
        this.params = params
    }

    getInstance () {
        return App
    }

    startServer (port = 3000) {
        console.log('start server...')
        new APP()
            .register(this.params)
            .listen(port)
            .startApp()
    }
}

module.exports = Core
