'use strict'

const Env = process.env
const DomainRef = Env.DOMAIN_REF || ''

module.exports = {
    'InventoryItem': {
        'required': [ 'id', 'manufacturer', 'name', 'releaseDate' ],
        'type': 'object',
        'properties': {
            'id': {
                'type': 'string',
                'format': 'uuid',
                'example': 'd290f1ee-6c54-4b01-90e6-d701748f0851'
            },
            'name': {
                'type': 'string',
                'example': 'Widget Adapter'
            },
            'releaseDate': {
                'type': 'string',
                'format': 'date-time'
            },
            'manufacturer': {
                '$ref': `${DomainRef}/open-api/references?ref=Schemas.Manufacturer`
            }
        }
    },
    'Manufacturer': {
        'required': [ 'name' ],
        'type': 'object',
        'properties': {
            'name': {
                'type': 'string',
                'example': 'ACME Corporation'
            },
            'homePage': {
                'type': 'string',
                'format': 'url',
                'example': 'https://www.acme-corp.com'
            },
            'phone': {
                'type': 'string',
                'example': '408-867-5309'
            }
        }
    }
}
