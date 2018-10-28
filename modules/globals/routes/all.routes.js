'use strict'

const utils = use('Utils.Helper')
const {path} = use('Deps.Loader')

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
    app.get('*', function (request, response) {
        response
            .status(404)
            .json({
                'status': 404,
                'message': 'Route Not Found',
                'group': prefix
            })
    })
}

const register = function (app, func, prefix = '') {
    for (let i of listRoutes.get) {
        const routePath = path.join(prefix, i.path)
        utils.debugme(` |-- registering route: ${routePath} [GET]`)
        app.get(routePath, func[i.fn])
    }
    registerNotFound(app, prefix)
}

module.exports = {
    register
}
