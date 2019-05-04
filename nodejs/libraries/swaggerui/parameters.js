const parameters = {
    'usernameStringBody': {
        'type': 'string'
    },
    'passwordStringBody': {
        'type': 'string',
        'format': 'password'
    }
}

module.exports = (key) => parameters[key]
