'use strict'

const utils = use('Utils.Helper')
const _ = use('_')

class Registry {
    constructor (Obj) { // Obj = Route or other
        this.obj = Obj
        this.middlewares = []
    }

    setControllerObj (ObjController) {
        this.ObjController = ObjController
        return this
    }

    setMiddlewareObj (ObjMiddleware) {
        this.ObjMiddleware = ObjMiddleware
        return this
    }

    registerRoutes (listRoutes = [], prefix = '') {
        utils.debugme('registering routes')
        if (!this.obj) throw new Error('Please Set AppRoute First from Express!')
        if (!this.ObjController) throw new Error('Please Set Controller First!')
        this.prefix = prefix
        for (const x of listRoutes) {
            const controller = (typeof x.controller === 'string') ? this.ObjController[x.controller] : x.controller
            const type = x.type
            const routepath = x.path
            const middlewares = _.result(x, 'middlewares', []).length > 0 ? x.middlewares.map(x => this.middlewares[x]) : []
            if (typeof this.obj[type] === 'function') {
                utils.debugme(` |-- registering route: ${routepath} [${type}]`)
                this.obj[type](routepath, middlewares, controller)
            }
        }
        this.obj['get']('*', function (req, res, next) {
            res
                .status(404)
                .json({'status': 404, 'message': 'NOT FOUND'})
        })
        return this
    }

    initialMiddlewares (middlewares = {}) {
        for (let x in middlewares) {
            this.middlewares[x] = middlewares[x]
        }
        return this
    }

    releaseRoutes (App = {}) { // Express Object
        if (!this.obj) throw new Error('Please Set AppRoute First from Express!')
        const prefix = '/' + (this.prefix || '')
        App.use(prefix, this.obj)
    }
}

module.exports = Registry
