'use strict'

const _ = require('lodash')
const Env = useStatic('Env')

module.exports = {
    'server0': {
        'dsn': _.result(Env, 'SERVER0_DSN', ''),
        'dbname': 'sentiments_local'
    },
    'server1': {
        'dsn': _.result(Env, 'SERVER1_DSN', ''),
        'dbname': 'users_local'
    },
    'server2': {
        'dsn': _.result(Env, 'SERVER2_DSN', ''),
        'dbname': 'share_local'
    },
    'server3': {
        'dsn': _.result(Env, 'SERVER3_DSN', ''),
        'dbname': 'logs_local'
    },
    'server4': {
        'dsn': _.result(Env, 'SERVER4_DSN', ''),
        'dbname': 'stores_local'
    },
    'server44': {
        'host': 'localhost',
        'port': 3306,
        'user': 'root',
        'pass': '',
        'db': ''
    },
    'server442': {},
    'server524': {}
}
