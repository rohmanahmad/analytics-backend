'use strict'

const Base = require('./_base.model')

class Expedition extends Base {
    get collection () {
        return 'store_expedition'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'created_at': Date,
            'id': String,
            'name': String,
            'website': String,
            'options': {},
            'status': {
                'available': Boolean,
                'banned': Boolean
            }
        }
    }
}

module.exports = Expedition
