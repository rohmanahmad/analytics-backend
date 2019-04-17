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
        path: '/login',
        type: 'post',
        controller: 'login',
        middlewares: [
            'input'
        ]
    },
    {
        path: '/register',
        type: 'post',
        controller: 'register',
        middlewares: [
            'input'
        ]
    },
    {
        path: '/reset',
        type: 'post',
        controller: 'reset',
        middlewares: [
            'auth',
            'input'
        ]
    },
    {
        path: '/user-login',
        type: 'get',
        controller: 'viewLogin',
        middlewares: [
            'sessionAuth'
        ]
    },
    {
        path: '/user-login',
        type: 'post',
        controller: 'doLogin',
        middlewares: [
            'sessionAuth',
            'input'
        ]
    }
]
