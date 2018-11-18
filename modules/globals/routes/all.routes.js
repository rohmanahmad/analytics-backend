'use strict'

const utils = use('Utils.Helper')
const path = use('path')

const RequestLog = use('RequestLogger.Middleware')

const listRoutes = {
    get: [
        {
            path: '/',
            fn: 'main'
        },
        {
            path: '/documentation',
            fn: 'docs'
        },
        {
            path: '/documentation/api-docs.json',
            fn: 'apidocs'
        }
    ]
}

const registerNotFound = function (app, prefix = '') {
    const routePath = path.join(prefix, '/*')
    utils.debugme(` |-- registering route: ${routePath} [GET]`)
    app.get('*', RequestLog)
}

const register = function (app, func, prefix = '') {
    for (let i of listRoutes.get) {
        const routePath = path.join(prefix, i.path)
        utils.debugme(` |-- registering route: ${routePath} [GET]`)
        app.get(routePath, func[i.fn])
    }
    if (this.useNotfound === 'yes') {
        registerNotFound(app, prefix)
    }
}

const use404 = function () {
    this.useNotfound = 'yes'
    return this
}

module.exports = {
    registerNotFound,
    register,
    use404
}
