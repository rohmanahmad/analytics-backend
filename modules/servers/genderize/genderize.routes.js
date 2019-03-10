'use strict'

module.exports = [
    {
        path: '/',
        type: 'get',
        controller: 'main',
        middlewares: [
        ]
    },
    {
        path: '/update',
        type: 'put',
        controller: 'updatename',
        middlewares: [
        ]
    },
    {
        path: '/get',
        type: 'get',
        controller: 'getname',
        middlewares: [
        ]
    },
    {
        path: '/remove',
        type: 'delete',
        controller: 'removename',
        middlewares: [
        ]
    }
]
