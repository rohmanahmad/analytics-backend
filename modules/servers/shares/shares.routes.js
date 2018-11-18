'use strict'

const utils = use('Utils.Helper')
const func = require('./shares.func')
const allRoutes = use('All.Routes')
const path = use('path')
const _ = use('_')

const input = use('ValidateInput.Middleware')

const listRoutes = {
    post: [
        {
            path: '/new',
            fn: func.newShare,
            middlewares: [
                input
            ]
        }
    ],
    get: [
        {
            path: '/:uniq_code',
            fn: func.goToUrl,
            middlewares: [
                input
            ]
        },
        {
            path: '/*',
            fn: function (req, res) {
                res.send({
                    status: 404,
                    message: 'NOT FOUND'
                })
            }
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

const register = function (app, prefix = '/api/shares') {
    // register another routes
    allRoutes.register(app, func, prefix)
    let routes = []
    for (let r of listRoutes['post']) {
        const {route, funcs, handler} = getMiddlewares(r, prefix)
        const slash = route.replace(/[^/]/g, '')
        utils.debugme(` |-- registering route: ${route} [POST]`)
        routes.push({type: 'post', route, funcs, handler, total: slash.length})
        // app.post(route, funcs, handler)
    }
    for (let r of listRoutes['get']) {
        const {route, funcs, handler} = getMiddlewares(r, prefix)
        const slash = route.replace(/[^/]/g, '')
        utils.debugme(` |-- registering route: ${route} [GET]`)
        routes.push({type: 'get', route, funcs, handler, total: slash.length})
        // app.get(route, funcs, handler)
    }
    routes = _.orderBy(routes, ['total'], ['desc'])
    for (const r of routes) {
        if (r.type === 'get') {
            app.get(r.route, r.funcs, r.handler)
        } else if (r.type === 'post') {
            app.post(r.route, r.funcs, r.handler)
        }
    }
}

module.exports = {
    register
}
