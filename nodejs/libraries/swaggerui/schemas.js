'use strict'

// const Env = process.env
// const DomainRef = Env.DOMAIN_REF || ''
let parameters = use('SwaggerUIParameters.Lib')

module.exports = {
    'LoginSuccess': {
        'required': [ 'id', 'manufacturer', 'name', 'releaseDate' ],
        'type': 'object',
        'properties': {
            'login_id': parameters('UUID'),
            'token': parameters('Token'),
            'refresh_token': parameters('RefreshToken')
        }
    },
    'RegisterSuccess': {
        'required': [ 'username', 'email', 'register_id' ],
        'type': 'object',
        'properties': {
            'username': parameters('usernameStringBody'),
            'email': parameters('Email'),
            'fullname': parameters('Fullname'),
            'register_id': parameters('UUID')
        }
    },
    'ForgotPasswordSent': {
        'required': [ 'email', 'forgot_id' ],
        'type': 'object',
        'properties': {
            'email': parameters('Email'),
            'forgot_id': parameters('UUID')
        }
    },
    'ResetPasswordValid': {
        'required': [ 'email', 'forgot_id' ],
        'type': 'object',
        'properties': {
            'email': parameters('Email'),
            'forgot_id': parameters('UUID')
        }
    },
    'ResetPasswordSuccess': {
        'required': [ 'email', 'forgot_id', 'status' ],
        'type': 'object',
        'properties': {
            'email': parameters('Email'),
            'forgot_id': parameters('UUID'),
            'status': parameters('Boolean')
        }
    }
}
