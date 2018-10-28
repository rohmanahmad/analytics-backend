'use strict'

const utils = use('Utils.Helper')
const {_} = use('Deps.Loader')

module.exports = function (request, response, next) {
    utils.debugme(' ... middleware [auth]')
    let authToken = request.header('Authorization')
    authToken = authToken && typeof authToken === 'string'
        ? authToken.replace('Bearer').trim()
        : null
    if (!authToken) {
        authToken = _.result(request.query, 'access_token', null)
    }
    if (!authToken) {
        response.status(402)
        response.json({
            status: 402,
            'message': 'UnAuthorized Request'
        })
    } else {
        return next()
    }
}
