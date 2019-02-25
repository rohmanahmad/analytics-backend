'use strict'

const Base = require('./_base.model')

class Province extends Base {
    get collection () {
        return 'store_province'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'id': String,
            'name': String,
            'status': {
                'available': Boolean,
                'banned': Boolean
            }
        }
    }
}

module.exports = Province
