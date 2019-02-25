'use strict'

const Base = require('./_base.model')

class Expedition extends Base {
    get collection () {
        return 'ongkos_kirim_id_price'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'shipping_price_id': String,
            'id': String,
            'company': {
                'id': Number,
                'name': String
            },
            'price': Number,
            'created_at': {
                'type': Date,
                'default': new Date()
            },
            'last_update': {
                'type': Date,
                'default': new Date()
            },
            'status': {
                'available': Boolean,
                'banned': Boolean
            }
        }
    }
}

module.exports = Expedition
