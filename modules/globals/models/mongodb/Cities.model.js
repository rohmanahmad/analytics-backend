'use strict'

const Base = require('./_base.model')

class Cities extends Base {
    get collection () {
        return 'store_cities'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'id': Number,
            'name': String,
            'postal_code': Number,
            'type': String,
            'province': {},
            'status': {
                'available': Boolean,
                'banned': Boolean
            }
        }
    }
}

module.exports = Cities
