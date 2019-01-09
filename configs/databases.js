'use strict'

const _ = require('lodash')
const Env = useStatic('Env')

module.exports = {
    'default': {
        'dsn': _.result(Env, 'SERVER_DEFAULT_DSN', ''),
        'dbname': 'malangsoftware'
    },
    'server1': {
        'dsn': _.result(Env, 'SERVER1_DSN', ''),
        'dbname': 'malangsoftwaregroup'
    },
    'server2': {
        'dsn': _.result(Env, 'SERVER2_DSN', ''),
        'dbname': 'malangsoftwaregroup'
    },
    'server3': {
        'host': 'localhost',
        'port': 3306,
        'user': 'root',
        'pass': '',
        'db': ''
    },
    'server4': {},
    'server5': {}
}
