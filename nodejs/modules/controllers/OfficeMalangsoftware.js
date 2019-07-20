'use strict'

let Core = require('../../__cores/core')

class OfficeMalangsoftware extends Core {
    async Main (request, response) {
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

module.exports = new OfficeMalangsoftware()
