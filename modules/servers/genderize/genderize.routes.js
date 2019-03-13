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
        path: '/getnamewords',
        type: 'post',
        controller: 'getnamewords',
        middlewares: [
        ]
    },
    {
        path: '/getnamelist',
        type: 'post',
        controller: 'getnamelist',
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
