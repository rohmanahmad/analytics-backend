'use strict'

const Base = require('./_base.model')

class InvalidRequestLog extends Base {
    get collection () {
        return 'invalid_request_log'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'created_at': Date,
            'ip': String,
            'url': String,
            'referal': String
        }
    }
}

module.exports = new InvalidRequestLog().model()
