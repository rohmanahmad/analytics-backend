'use strict'

const {mongodb_conf} = use('configs/db.conf')
const {jwtauth} = use('configs/auth.conf')

module.exports = {
    jwtauth,
    mongodb_conf
}
