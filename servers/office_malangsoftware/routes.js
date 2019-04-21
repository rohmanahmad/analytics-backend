'use strict'

module.exports = [
    {
        path: '/',
        type: 'get',
        controller: 'OfficeMalangsoftware.index',
        middlewares: [
            // 'AuthToken'
        ]
    }
]
