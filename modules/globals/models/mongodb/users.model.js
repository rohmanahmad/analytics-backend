'use strict'

const Base = require('./_base.model')

class Users extends Base {
    get collection () {
        return 'user_accounts'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'user_email': String,
            'user_password': String
        }
    }
}

module.exports = new Users().model()
