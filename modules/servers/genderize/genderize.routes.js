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
        path: '/update/name/words',
        type: 'put',
        controller: 'updateNameWords',
        middlewares: [
        ]
    },
    {
        path: '/update/name',
        type: 'put',
        controller: 'updateName',
        middlewares: [
        ]
    },
    {
        path: '/get/name/words',
        type: 'post',
        controller: 'getNameWords',
        middlewares: [
        ]
    },
    {
        path: '/get/name',
        type: 'post',
        controller: 'getName',
        middlewares: [
        ]
    },
    {
        path: '/remove/name/words',
        type: 'delete',
        controller: 'removeNameWords',
        middlewares: [
        ]
    },
    {
        path: '/remove/name',
        type: 'delete',
        controller: 'removeName',
        middlewares: [
        ]
    }
]
