'use strict'

const {mongodb} = use('configs/db.conf')
const {jwtauth} = use('configs/auth.conf')

module.exports = {
    jwtauth,
    mongodb
}
