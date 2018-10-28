'use strict'

const Base = require('./_base.model')

class Users extends Base {
    get collection () {
        return 'user_accounts'
    }
}

module.exports = new Users()
