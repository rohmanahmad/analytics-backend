'use strict'

let parameters = use('SwaggerUIParameters.Lib')

module.exports = {
    'AccountLogin': {
        'content': {
            'application/x-www-form-urlencoded': {
                'schema': {
                    'type': 'object',
                    'properties': {
                        'username': parameters('usernameStringBody'),
                        'password': parameters('passwordStringBody')
                    },
                    'required': ['username', 'password']
                }
            }
        }
    }
}
