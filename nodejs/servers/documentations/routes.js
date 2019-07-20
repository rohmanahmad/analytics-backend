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
        path: '/open-api/accounts',
        type: 'get',
        controller: 'Documentations.AccountsDoc',
        middlewares: [
            // 'AuthToken'
        ]
    },
    {
        path: '/open-api/references',
        type: 'get',
        controller: 'Documentations.References',
        middlewares: [
            // 'AuthToken'
        ]
    }
]
