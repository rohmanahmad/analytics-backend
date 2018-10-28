'use strict'

const utils = use('Utils.Helper')
const {path} = use('Deps.Loader')

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
    app.get('/', func.main)
    app.get('/documentation', func.docs)
    app.get('/api-docs.json', func.apidocs)
    for (let r of listRoutes['get']) {
        const routePath = path.join(prefix, r.path)
        utils.debugme(`|-- registering route: ${routePath} [GET]`)
        app.get(routePath, r.fn)
    }
    for (let r of listRoutes['post']) {
        const routePath = `${prefix}${r.path}`
        utils.debugme(`|-- registering route: ${routePath} [POST]`)
        app.post(routePath, r.fn)
    }
}

module.exports = {
    register
}
