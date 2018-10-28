'use strict'

const func = require('./home.func')
const utils = use('Utils.Helper')
const allRoutes = use('All.Routes')
const {path} = use('Deps.Loader')

const listRoutes = {
    get: [
    ]
}

const register = function (app, prefix = '') {
    for (let r of listRoutes['get']) {
        const routePath = path.join(prefix, r.path)
        utils.debugme(` |-- registering route: ${routePath} [GET]`)
        app.get(routePath, r.fn)
    }
    // register another routes
    allRoutes.register(app, func, prefix)
}

module.exports = {
    register
}
