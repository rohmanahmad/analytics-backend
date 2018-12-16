'use strict'

const utils = use('Utils.Helper')
const Session = use('session')

module.exports = function (request, response, next) {
    utils.debugme(' ... middleware [auth:session]')
    const sessID = request.sessionID
    console.log(sessID)
    if (!sessID) {
        response.status(400)
        response.json({
            status: 402,
            'message': 'Bad Request'
        })
    } else {
        next()
    }
}
