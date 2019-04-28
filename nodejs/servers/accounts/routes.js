'use strict'

module.exports = [
    {
        path: '/login',
        type: 'get',
        controller: 'Accounts.LoginAuth',
        middlewares: [
            // 'AuthToken'
        ]
    }
]
