'use strict'

const Base = require('./_base.model')

class LogModel extends Base {
    static get collection () {
        return 'request_logs'
    }

    static get dbname () {
        return 'malangsoftwarecom'
    }
}

module.exports = LogModel
