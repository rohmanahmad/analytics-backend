'use strict'

const Accounts = {
    name: 'Accounts Project',
    version: '1.0.0',
    server: {
        host: '127.0.0.1',
        port: 4000
    },
    routes: [
        {
            method: 'GET',
            path: '/account/login',
            group: 'administration',
            controller: 'Users.Login',
            middlewares: [
                'InputValidator',
                'Authentication.jwt'
            ]
        }
    ]
}

module.exports = Accounts
