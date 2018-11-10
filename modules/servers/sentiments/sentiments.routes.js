'use strict'

const utils = use('Utils.Helper')
const {path} = use('Deps.Loader')
const allRoutes = use('All.Routes')

const func = require('./sentiments.func')

const {auth, input} = use('Middlewares')

const listRoutes = {
    get: [
        {
            path: '/vocab/list',
            fn: func.vocabList,
            middlewares: [
                auth,
                input
            ]
        },
        {
            path: '/vocab/:id',
            fn: func.vocabOne,
            middlewares: [
                auth,
                input
            ]
        },
        {
            path: '/vocab/delete',
            fn: func.vocabDelete,
            middlewares: [
                auth,
                input
            ]
        }
    ],
    post: [
        {
            path: '/vocab/update',
            fn: func.vocabUpdate,
            middlewares: [
                auth,
                input
            ]
        },
        {
            path: '/vocab/create',
            fn: func.vocabNew,
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

const register = function (app, prefix = '/api/analytics/sentiments') {
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
