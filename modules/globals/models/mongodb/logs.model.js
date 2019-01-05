'use strict'

const Base = require('./_base.model')

class Log extends Base {
    get collection () {
        return 'request_logs'
    }

    get objectid () {
        return ['_id']
    }

    get schema () {
        return {
            'type': String
        }
    }
}

module.exports = Log
