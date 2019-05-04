'use strict'

const Env = process.env
const DomainRef = Env.DOMAIN_REF || ''

module.exports = {
    '/accounts/login': {
        'post': {
            'tags': ['users'],
            'summary': 'searches inventory',
            'description': 'By passing in the appropriate options, you can search for\navailable inventory in the system\n',
            'operationId': 'searchInventory',
            'requestBody': {
                '$ref': `${DomainRef}/open-api/references?ref=Body.AccountLogin`
            },
            'responses': {
                '200': {
                    'description': 'search results matching criteria',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array',
                                'items': {
                                    '$ref': `${DomainRef}/open-api/references?ref=Schemas.InventoryItem`
                                }
                            }
                        }
                    }
                },
                '400': {
                    'description': 'bad input parameter'
                }
            }
        }
    }
}
