'use strict'

module.exports = function (request, response, next) {
    try {
        console.log('-- input middleware')
        next()
    } catch (err) {
        next(err)
    }
}
