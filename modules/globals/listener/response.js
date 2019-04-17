'use strict'

const registerListener = function (request, response, next) {
    response.apiCollection = function (data, meta) {
        response
            .status(200)
            .json({status: 200, items: data, meta})
    }
    response.apiSuccess = function (msg = 'success') {
        response
            .status(200)
            .json({status: 200, message: msg})
    }
    response.apiError = function (error) {
        response
            .status(402)
            .json({
                status: 402,
                error
            })
    }
    next()
}

module.exports = registerListener
