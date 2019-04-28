'use strict'

let Core = require('../../__cores/core')

class Documentations extends Core {
    async Main (request, response, next) {
        try {
            throw new Error('hello')
            response.send('<center><h1 style="margin-top: 100px;">Server Running</h1></center>')
        } catch (err) {
            console.error(err)
            response.status(400)
                .json({
                    status: 400,
                    message: 'Bad Request',
                    error: err.message
                })
        }
    }
    async OpenAPI (request, response) {
        try {
            response.json('docs')
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
    async AccountsDoc (request, response) {
        try {
            response.json('docs')
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

module.exports = new Documentations()
