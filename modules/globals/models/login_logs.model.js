'use strict'

const Base = require('./_base.model')

class UsersLoginLogs extends Base {
    get collection () {
        return 'user_login_logs'
    }
}

module.exports = new UsersLoginLogs()
