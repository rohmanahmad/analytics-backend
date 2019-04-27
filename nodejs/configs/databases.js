'use strict'

const _ = require('lodash')
const Env = useStatic('Env')

module.exports = [
    {
        'name': 'server0',
        'driver': 'mongodb',
        'dsn': _.result(Env, 'SERVER0_DSN', null),
        'dbname': 'sentiments_local'
    },
    {
        'name': 'server1',
        'driver': 'mongodb',
        'dsn': _.result(Env, 'SERVER1_DSN', null),
        'dbname': 'users_local'
    },
    {
        'name': 'server2',
        'driver': 'mongodb',
        'dsn': _.result(Env, 'SERVER2_DSN', null),
        'dbname': 'share_local'
    },
    {
        'name': 'server3',
        'driver': 'mongodb',
        'dsn': _.result(Env, 'SERVER3_DSN', null),
        'dbname': 'logs_local'
    },
    {
        'name': 'server4',
        'driver': 'mongodb',
        'dsn': _.result(Env, 'SERVER4_DSN', null),
        'dbname': 'stores_local'
    },
    {
        'name': 'server5',
        'driver': 'mongodb',
        'dsn': _.result(Env, 'SERVER5_DSN', null),
        'dbname': 'rawdata_local'
    },
    {
        'name': 'server6',
        'driver': 'mongodb',
        'dsn': _.result(Env, 'SERVER6_DSN', null),
        'dbname': 'genders_local'
    },
    {
        'driver': 'mysql',
        'host': 'localhost',
        'port': 3306,
        'user': 'root',
        'pass': '',
        'db': ''
    }
]
