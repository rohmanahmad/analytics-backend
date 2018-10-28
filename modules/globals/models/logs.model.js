'use strict'

const Base = require('./_base.model')

class Log extends Base {
    get collection () {
        return 'request_logs'
    }
}

module.exports = new Log()
