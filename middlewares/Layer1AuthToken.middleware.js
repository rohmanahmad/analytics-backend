'use strict'

const utils = use('Utils.Helper')
const _ = use('_')

module.exports = function (request, response, next) {
    utils.debugme(' ... middleware [auth]')
    let authToken = request.header('Authorization')
    authToken = authToken && typeof authToken === 'string'
        ? authToken.replace('Bearer').trim()
        : _.result(request.query, 'token', '').trim()
    if (!authToken) {
        authToken = _.result(request.query, 'access_token', null)
    }
    if (!authToken) {
        response.status(400)
        response.json({
            status: 402,
            'message': 'Bad Request'
        })
    } else {
        next()
    }
}
