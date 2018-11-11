'use strict'

const Base = require('./_base.model')

class ShortLink extends Base {
    get collection () {
        return 'short_link'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'is_anonim': String,
            'url': String,
            'uniq_code': String,
            'hash': String,
            'total_visit': Number,
            'created_at': Date
        }
    }
}

module.exports = new ShortLink().model()
