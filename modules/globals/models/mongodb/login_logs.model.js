'use strict'

const Base = require('./_base.model')

class UsersLoginLogs extends Base {
    get collection () {
        return 'user_login_logs'
    }

    get objectid () {
        return ['user_id']
    }

    get schema () {
        return {
            'login_at': Date,
            'ip_address': String,
            'user_agent': String
        }
    }
}

module.exports = new UsersLoginLogs().model()
