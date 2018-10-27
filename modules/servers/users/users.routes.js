'use strict'

const func = require('./users.func')

module.exports = [
    {
        route: '/users/',
        method: func.main
    },
    {
        route: '/users/login',
        method: func.login
    }
]
