'use strict'

const path = require('path')
const ExpressJs = require('express')
const Cors = require('cors')
const BodyParser = require('body-parser')
const Http = require('http')
const Compression = require('compression')
const helmet = require('helmet')
const methodOverride = require('method-override')

const {loadController, loadMiddleware} = require('./Core')

let ExpressApp = ExpressJs()

module.exports = {
    middlewares: function (routes = []) {
        try {
            let m = {}
            for (let route of routes) {
                if (route.middlewares && typeof route.middlewares === 'object') {
                    for (let x of route.middlewares) {
                        if (x.indexOf('.') > -1) {
                            const file = x.split('.')[0]
                            const fn = x.split('.')[1]
                            const md = loadMiddleware(file)
                            if (md && typeof md[fn] === 'function') {
                                m[x] = md[fn]
                            } else {
                                throw new Error(`${fn} in ${file} is Not a Function`)
                            }
                        } else {
                            m[x] = loadMiddleware(x)
                        }
                    }
                }
            }
            return m
        } catch (err) {
            throw err
        }
    },
    routers: function (routes = []) {
        try {
            const routeFiles = routes.map(x => {
                const {controller} = x
                const last = controller.split('/').pop()
                const controllerName = last.split('.')[0]
                const isFile = controller.indexOf('/') <= 0
                const filePath = isFile ? controllerName : controller.replace(last, '')
                const fileController = path.join(filePath, 'Controllers', controllerName)
                return {n: controllerName, p: fileController}
            })
            const middleFiles = this.middlewares(routes)
            let R = {}
            for (let f of routeFiles) {
                R[f.n] = loadController(f.p)
            }
            for (let route of routes) {
                const {method, path: p, middlewares, group, controller} = route
                const c = controller.split('/').pop().split('.')
                const n = c[0]
                const f = c[1]
                let r = path.join('/', (group || '/'), p)
                if (typeof R[n] !== 'function') throw new Error('Invalid Class on ' + n)
                const Fn = new R[n]()
                if (typeof Fn[f] !== 'function') throw new Error(`Invalid ${f} Function on ${n} Controller`)
                const middlws = middlewares ? middlewares.map(x => middleFiles[x]) : []
                switch (method.toLowerCase()) {
                case 'get':
                    ExpressApp.get(r, middlws, Fn[f])
                    break;
                case 'post':
                    ExpressApp.post(r, middlws, Fn[f])
                    break;
                case 'put':
                    ExpressApp.put(r, middlws, Fn[f])
                    break;
                case 'delete':
                    ExpressApp.delete(r, middlws, Fn[f])
                    break;
                default:
                    break;
                }
            }
        } catch (err) {
            debuglog.error(err)
        }
    },
    init: function (config = {}) {
        const {routes} = config
        const {host, port} = config.server || {}
        if (host && port) this.initServer()
        if (routes && routes.length > 0) this.routers(routes)
        if (host && port) this.start(host, port)
    },
    initServer: function () {
        try {
            // enable trust-proxy
            ExpressApp.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
            // enable compression
            ExpressApp.use(Compression())
            // enable cors in all routes
            ExpressApp.use(Cors())
            // parse various different custom JSON types as JSON
            ExpressApp.use(BodyParser.json({ type: 'application/*+json' }))
            // parse some custom thing into a Buffer
            ExpressApp.use(BodyParser.raw({ type: 'application/vnd.custom-type' }))
            ExpressApp.use(BodyParser.urlencoded({ extended: true }))
            // parse an HTML body into a string
            ExpressApp.use(BodyParser.text({ type: 'text/html' }))
            // enable helmet
            ExpressApp.use(methodOverride())
            ExpressApp.use(helmet())
            ExpressApp.use(function (request, response, next) {
                debuglog.info(`[${request.method}] ${request.originalUrl}`)
                next()
            })
        } catch (err) {
            debuglog.error(err)
        }
    },
    // handle error if called
    handlingErrorExceptions: function () {
        ExpressApp.use(function (error, request, response, next) {
            if (error) {
                response.status(400)
                    .send({
                        status: 400,
                        message: 'bad request',
                        error: error.message
                    })
                debuglog.error(error)
            }
        })
    },
    start: function (host, port) {
        try {
            this.handlingErrorExceptions()
            Http.createServer(ExpressApp).listen(port)
            debuglog.info(`Listen server on ${host}:${port}`)
        } catch (err) {
            debuglog.error(err)
        }
    }
}
