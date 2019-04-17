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
            'id': String,
            'name': String,
            'website': {
                'type': String,
                'default': ''
            },
            'company': {
                'id': Number,
                'name': String,
                'origin': {
                    'type': String,
                    'default': 'ongkoskirim'
                },
                'description': {
                    'type': String,
                    'default': ''
                }
            },
            'options': {
                'cek_resi_url': {
                    'type': String,
                    'default': ''
                },
                'international_service': Boolean
            },
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
