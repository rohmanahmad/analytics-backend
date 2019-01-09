'use strict'

const utils = use('Utils.Helper')

class Registry {
    constructor (Obj) { // Obj = Route or other
        this.obj = Obj
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
            const controller = this.ObjController[x.controller]
            const type = x.type
            const routepath = x.path
            // const middleware = this.ObjMiddleware[x.middleware]
            if (typeof this.obj[type] === 'function') {
                utils.debugme(` |-- registering route: ${routepath} [${type}]`)
                this.obj[type](routepath, controller)
            }
        }
        this.obj['get']('*', function (req, res, next) {
            res.json({'status': 404, 'message': 'NOT FOUND'})
        })
        return this
    }

    releaseRoutes (App = {}) { // Express Object
        if (!this.obj) throw new Error('Please Set AppRoute First from Express!')
        const prefix = '/' + (this.prefix || '')
        App.use(prefix, this.obj)
    }
}

module.exports = Registry
