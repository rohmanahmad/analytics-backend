'use strict'

const utils = use('Utils.Helper')
const func = require('./admin.func')
const path = use('path')
const _ = use('_')
const allRoutes = use('All.Routes')
const input = use('ValidateInput.Middleware')
const session = use('Layer1AuthSession.Middleware')

const listRoutes = {
    post: [
        {
            path: '/api/login',
            fn: func.login,
            middlewares: [
                input,
                session
            ]
        }
    ],
    get: [
        {
            path: '/auth/login',
            fn: func.loginPage,
            middlewares: [
                session
            ]
        },
        {
            path: '/',
            fn: func.main,
            middlewares: [
            ]
        }
    ]
}

function getMiddlewares (r, prefix) {
    const middlewares = r.middlewares || []
    return {
        route: path.join(prefix, r.path),
        funcs: middlewares,
        handler: r.fn
    }
}

const register = function (app, prefix = '/rohmanwebid/admin') {
    // register another routes
    allRoutes.register(app, func, prefix)
    let routes = []
    for (let r of listRoutes['post']) {
        const {route, funcs, handler} = getMiddlewares(r, prefix)
        const slash = route.replace(/[^/]/g, '')
        utils.debugme(` |-- registering route: ${route} [POST]`)
        routes.push({type: 'post', route, funcs, handler, total: slash.length})
    }
    for (let r of listRoutes['get']) {
        const {route, funcs, handler} = getMiddlewares(r, prefix)
        const slash = route.replace(/[^/]/g, '')
        utils.debugme(` |-- registering route: ${route} [GET]`)
        routes.push({type: 'get', route, funcs, handler, total: slash.length})
    }
    routes = _.orderBy(routes, ['total'], ['desc'])
    for (const r of routes) {
        if (r.type === 'get') {
            app.get(r.route, r.funcs, r.handler)
        } else if (r.type === 'post') {
            app.post(r.route, r.funcs, r.handler)
        }
    }
    allRoutes.registerNotFound(app, prefix)
}

module.exports = {
    register
}
