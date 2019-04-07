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
            'shipping': {
                'id': Number,
                'name': String
            },
            'price': Number,
            'prices_detail': [],
            'detail': {
                'from': {
                    't': String,
                    'id': Number
                },
                'destination': {
                    'city': Number,
                    'kec': Number
                }
            },
            'created_at': {
                'type': Date,
                'default': Date.now
            },
            'last_update': {
                'type': Date,
                'default': Date.now
            },
            'status': {
                'available': Boolean,
                'banned': Boolean
            }
        }
    }
}

module.exports = Expedition
