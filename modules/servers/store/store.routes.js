'use strict'

module.exports = [
    {
        path: '/',
        type: 'get',
        controller: 'main',
        middlewares: []
    },
    {
        path: '/mobile',
        type: 'get',
        controller: 'mobile',
        middlewares: []
    },
    {
        path: '/categories/list',
        type: 'get',
        controller: 'categories',
        middlewares: []
    }
]
