'use strict'

const _ = use('_')

const parameters = {
    'emailStringBody': {
        'type': 'string',
        'format': 'email',
        'example': 'jhonwaldoe@example.com'
    },
    'usernameStringBody': {
        'type': 'string',
        'example': 'jhonwaldoe'
    },
    'firstnameStringBody': {
        'type': 'string',
        'example': 'jhon'
    },
    'middlenameStringBody': {
        'type': 'string',
        'example': 'wal'
    },
    'lastnameStringBody': {
        'type': 'string',
        'example': 'doe'
    },
    'passwordStringBody': {
        'type': 'string',
        'format': 'password'
    },
    'confirmpassStringBody': {
        'type': 'string',
        'format': 'password'
    },
    'Token': {
        'type': 'string',
        'format': 'hash',
        'example': 'd9ee6c544b0...6d701748f0851'
    },
    'RefreshToken': {
        'type': 'string',
        'format': 'hash',
        'example': 'd9ee6c-6d701748f0-851e'
    },
    'UUID': {
        'type': 'string',
        'format': 'uuid',
        'example': 'd290f1ee-6c54-4b01-90e6-d701748f0851'
    },
    'FullName': {
        'type': 'string',
        'example': 'John Wal Doe'
    },
    'Boolean': {
        'type': 'boolean',
        'example': true
    },
    'Email': {
        'type': 'string',
        'format': 'email',
        'example': 'john@example.com'
    }
}

module.exports = (key, opt) => {
    let params = _.cloneDeep(parameters[key])
    if (!opt) return params
    if (typeof opt === 'object') {
        params = Object.assign(params, opt)
    }
    return params
}
