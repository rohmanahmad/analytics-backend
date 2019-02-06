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
    }
]
