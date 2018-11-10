'use strict'

const registerListener = function (request, response, next) {
    response.apiCollection = function (data, meta) {
        response
            .status(200)
            .json({status: 200, items: data, meta})
    }
    next()
}

module.exports = registerListener
