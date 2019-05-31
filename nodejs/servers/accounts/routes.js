'use strict'

module.exports = [
    {
        path: '/api/v1/account/auth/login',
        type: 'post',
        controller: 'Accounts.LoginAuth',
        middlewares: [
            // 'AuthToken'
        ]
    },
    {
        path: '/api/v1/account/auth/register',
        type: 'post',
        controller: 'Accounts.RegisterAuth',
        middlewares: [
            // 'AuthToken'
        ]
    },
    {
        path: '/api/v1/account/auth/forgot',
        type: 'get',
        controller: 'Accounts.ForgotPasswordAuth',
        middlewares: [
            // 'AuthToken'
        ]
    },
    {
        path: '/api/v1/account/auth/forgot/validation',
        type: 'post',
        controller: 'Accounts.ForgotValidationAuth',
        middlewares: [
            // 'AuthToken'
        ]
    },
    {
        path: '/api/v1/account/auth/password/change',
        type: 'post',
        controller: 'Accounts.ChangePasswordAuth',
        middlewares: [
            // 'AuthToken'
        ]
    }
]
