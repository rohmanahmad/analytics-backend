'use strict'

const _ = require('lodash')
const databases = require('./databases')
const Env = useStatic('Env')
const mongoserver = 'server2'
const mongoDSN = _.result(databases, `${mongoserver}.dsn`)
const dbName = _.result(databases, `${mongoserver}.dbname`)

module.exports = {
    documentation: {
        domain: 'shares.localhost'
    },
    auth: {
        secret: _.result(Env, 'APP_KEY_SECRET', 'TH3SECR3TCHARACT3R5')
    },
    database: {
        mongodb: {
            dsn: mongoDSN,
            dbname: dbName
        },
        mysql: {
            host: '',
            port: 3306,
            user: '',
            pass: ''
        }
    },
    server: {
        default: {
            port: 8003
        },
        cors: {
            domains: ['http://localhost:8080'],
            methods: ['GET', 'POST']
        }
    }
}
