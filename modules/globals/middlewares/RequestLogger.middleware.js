'use strict'

const InvalidRequestLog = use('InvalidRequestLog.Model')

module.exports = function (request, response, next) {
    const ip = request.ip
    const url = request.originalUrl
    const referal = request.header('Referer')
    InvalidRequestLog.create({
        ip,
        url,
        referal,
        created_at: new Date()
    }, function (e, r) {
        console.log(e, r)
    })
    response.status(404).json({
        'status': 404,
        'message': 'Not Found'
    })
}
