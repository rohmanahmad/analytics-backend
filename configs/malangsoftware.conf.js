'use strict'

const _ = require('lodash')
const databases = require('./databases')
const mongoserver = 'server1'
const mongoDSN = _.result(databases, `${mongoserver}.dsn`)
const dbName = _.result(databases, `${mongoserver}.dbname`)

module.exports = {
    auth: {
        secret: 'th3scretch4ra4ct3r5'
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
            port: 8004
        },
        cors: {
            domains: ['http://localhost:8080'],
            methods: ['GET', 'POST']
        }
    }
}
