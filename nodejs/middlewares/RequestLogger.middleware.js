/* 'use strict'

const utils = use('Utils.Helper')
const Models = use('Models')
const InvalidRequestLog = new Models().model('InvalidRequestLog.Model')

module.exports = function (request, response, next) {
    const ip = request.ip
    const url = request.originalUrl
    const referal = request.header('Referer')
    response.status(404).json({
        'status': 404,
        'message': 'Not Found'
    })
    InvalidRequestLog.create({
        ip,
        url,
        referal,
        created_at: new Date()
    }, function (e, r) {
        if (e) {
            utils.log(e)
        }
        utils.log('new logger created')
    })
}
 */
