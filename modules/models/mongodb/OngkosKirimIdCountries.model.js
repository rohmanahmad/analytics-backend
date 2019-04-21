'use strict'

const Base = require('./_base.model')

class Expedition extends Base {
    get collection () {
        return 'ongkos_kirim_id_countries'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'id': String,
            'name': String,
            'website': {
                'type': String,
                'default': ''
            },
            'options': {
                'country_id': Number,
                'country_code': String,
                'currency_code': String,
                'weight_unit': {
                    'type': String,
                    'default': 'KG'
                },
                'dimension_unit': {
                    'type': String,
                    'default': 'CM'
                },
                'location_type': Number
            },
            'region': String,
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
