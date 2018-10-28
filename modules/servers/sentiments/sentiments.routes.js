'use strict'

const utils = use('Utils.Helper')
const {path} = use('Deps.Loader')
const allRoutes = use('All.Routes')

const func = require('./sentiments.func')

const listRoutes = {
    get: [
        {
            path: '/vocab-list',
            fn: func.vocabList
        },
        {
            path: '/vocab/:id',
            fn: func.vocabOne
        },
        {
            path: '/vocab-delete',
            fn: func.vocabDelete
        }
    ],
    post: [
        {
            path: '/vocab/update',
            fn: func.vocabUpdate
        },
        {
            path: '/vocab/create',
            fn: func.vocabNew
        }
    ]
}

const register = function (app, prefix = '/api/analytics/sentiments') {
    for (let r of listRoutes['get']) {
        const routePath = path.join(prefix, r.path)
        utils.debugme(` |-- registering route: ${routePath} [GET]`)
        app.get(routePath, r.fn)
    }
    for (let r of listRoutes['post']) {
        const routePath = path.join(prefix, r.path)
        utils.debugme(` |-- registering route: ${routePath} [POST]`)
        app.post(routePath, r.fn)
    }
    // register another routes
    allRoutes.register(app, func, prefix)
}

module.exports = {
    register
}
