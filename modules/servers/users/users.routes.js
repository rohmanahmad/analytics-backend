'use strict'

const utils = use('Utils.Helper')
const func = require('./users.func')

const listRoutes = {
        get: [
            {
                path: '/',
                fn: func.main
            }
        ],
        post: [
            {
                path: '/login',
                fn: func.login
            }
        ]
    }

const register = function (app, prefix = '/api/users') {
    app.get('/', func.main)
    for (let r of listRoutes['get']) {
        const routePath = `${prefix}${r.path}`
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
