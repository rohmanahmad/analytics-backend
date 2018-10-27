'use strict'

const func = require('./home.func')
const utils = use('Utils.Helper')

const listRoutes = {
        get: [
            {
                path: '/',
                fn: func.main
            }
        ]
    }

const register = function (app, prefix = '/api') {
    app.get('/', func.main)
    app.get('/docs', func.docs)
    for (let r of listRoutes['get']) {
        const routePath = `${prefix}${r.path}`
        utils.debugme(`|-- registering route: ${routePath} [GET]`)
        app.get(routePath, r.fn)
    }
}

module.exports = {
    register
}
