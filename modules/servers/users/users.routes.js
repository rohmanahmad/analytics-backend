'use strict'

const utils = use('Utils.Helper')
const func = require('./users.func')
const allRoutes = use('All.Routes')
const {path, _} = use('Deps.Loader')

const {auth, input} = use('Middlewares')

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

const register = function (app, prefix = '/api/users') {
    for (let r of listRoutes['get']) {
        const routePath = path.join(prefix, r.path)
        const middlewares = r.middlewares || []
        const sequenceFuncs = middlewares.push(r.fn)
        utils.debugme(` |-- registering route: ${routePath} [GET]`)
        app.get(routePath, sequenceFuncs)
    }
    for (let r of listRoutes['post']) {
        const routePath = path.join(prefix, r.path)
        const middlewares = r.middlewares || []
        const sequenceFuncs = _.concat(middlewares, r.fn)
        utils.debugme(` |-- registering route: ${routePath} [POST]`)
        app.post(routePath, sequenceFuncs)
    }
    // register another routes
    allRoutes.register(app, func, prefix)
}

module.exports = {
    register
}
