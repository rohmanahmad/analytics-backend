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
    },
    'AccountRegister': {
        'content': {
            'application/x-www-form-urlencoded': {
                'schema': {
                    'type': 'object',
                    'properties': {
                        'email': parameters('emailStringBody'),
                        'firstname': parameters('firstnameStringBody'),
                        'middlename': parameters('middlenameStringBody'),
                        'lastname': parameters('lastnameStringBody'),
                        'username': parameters('usernameStringBody'),
                        'password': parameters('passwordStringBody'),
                        'confirmpass': parameters('confirmpassStringBody')
                    },
                    'required': ['email', 'firstname', 'username', 'password', 'confirmpass']
                }
            }
        }
    },
    'AccountForgot': {
        'content': {
            'application/x-www-form-urlencoded': {
                'schema': {
                    'type': 'object',
                    'properties': {
                        'email': parameters('emailStringBody')
                    },
                    'required': ['email']
                }
            }
        }
    },
    'AccountForgotLink': [
        parameters('Email', {'name': 'email', 'in': 'query', 'style': 'form'}),
        parameters('UUID', {'name': 'forgot_id', 'in': 'query', 'style': 'form'})
    ],
    'AccountResetPassword': {
        'content': {
            'application/x-www-form-urlencoded': {
                'schema': {
                    'type': 'object',
                    'properties': {
                        'forgot_id': parameters('UUID'),
                        'email': parameters('emailStringBody'),
                        'password': parameters('passwordStringBody'),
                        'confirmpass': parameters('confirmpassStringBody')
                    },
                    'required': ['forgot_id', 'email', 'password', 'confirmpass']
                }
            }
        }
    }
}
