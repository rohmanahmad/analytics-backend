'use strict'

module.exports = [
    {
        path: '/',
        type: 'get',
        controller: 'Documentations.Main',
        middlewares: [
            // 'AuthToken'
        ]
    },
    {
        path: '/open-api',
        type: 'get',
        controller: 'Documentations.OpenAPI',
        middlewares: [
            // 'AuthToken'
        ]
    },
    {
        path: '/open-api/accounts',
        type: 'get',
        controller: 'Documentations.AccountsDoc',
        middlewares: [
            // 'AuthToken'
        ]
    }
]
