'use strict'

const jwt = async function (request, response, next) {
    debuglog.info('-- Authentication (jwt)')
    try {
        next()
    } catch (err) {
        next(err)
    }
}
const cookies = async function (request, response, next) {
    debuglog.info('-- Authentication (cookies)')
    try {
        next()
    } catch (err) {
        next(err)
    }
}

const session = async function (request, response, next) {
    debuglog.info('-- Authentication (session)')
    try {
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    jwt,
    cookies,
    session
}
