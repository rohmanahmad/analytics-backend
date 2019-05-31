'use strict'

let Core = require('../../__cores/core')

class Accounts extends Core {
    async LoginAuth (request, response) {
        try {
            response.json('ok')
        } catch (err) {
            console.log(err)
            response.status(400)
                .json({
                    status: 400,
                    message: 'Bad Request',
                    error: err.message
                })
        }
    }
    async RegisterAuth (request, response) {
        try {
            response.json('ok')
        } catch (err) {
            console.log(err)
            response.status(400)
                .json({
                    status: 400,
                    message: 'Bad Request',
                    error: err.message
                })
        }
    }
    async ForgotPasswordAuth (request, response) {
        try {
            response.json('ok')
        } catch (err) {
            console.log(err)
            response.status(400)
                .json({
                    status: 400,
                    message: 'Bad Request',
                    error: err.message
                })
        }
    }
    async ForgotValidationAuth (request, response) {
        try {
            response.json('ok')
        } catch (err) {
            console.log(err)
            response.status(400)
                .json({
                    status: 400,
                    message: 'Bad Request',
                    error: err.message
                })
        }
    }
    async ChangePasswordAuth (request, response) {
        try {
            response.json('ok')
        } catch (err) {
            console.log(err)
            response.status(400)
                .json({
                    status: 400,
                    message: 'Bad Request',
                    error: err.message
                })
        }
    }
}

module.exports = new Accounts()
