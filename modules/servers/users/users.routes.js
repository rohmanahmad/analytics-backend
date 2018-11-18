'use strict'

const utils = use('Utils.Helper')
const func = require('./users.func')
const allRoutes = use('All.Routes')
const path = use('path')

const auth = use('Layer1AuthToken.Middleware')
const input = use('ValidateInput.Middleware')

const listRoutes = {
    get: [
    ],
    post: [
        {
            path: '/login',
            fn: func.login,
            middlewares: [
                input
            ]
        },
        {
            path: '/register',
            fn: func.register,
            middlewares: [
                input
            ]
        },
        {
            path: '/reset',
            fn: func.reset,
            middlewares: [
                auth,
                input
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

const register = function (app, prefix = '/api/users') {
    for (let r of listRoutes['get']) {
        const {route, funcs, handler} = getMiddlewares(r, prefix)
        utils.debugme(` |-- registering route: ${route} [GET]`)
        app.get(route, funcs, handler)
    }
    for (let r of listRoutes['post']) {
        const {route, funcs, handler} = getMiddlewares(r, prefix)
        utils.debugme(` |-- registering route: ${route} [POST]`)
        app.post(route, funcs, handler)
    }
    // register another routes
    allRoutes.register(app, func, prefix)
}

module.exports = {
    register
}
