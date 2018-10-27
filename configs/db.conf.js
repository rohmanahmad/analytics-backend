'use strict'

const _ = require('lodash')

let {connections, mysql, mongodb} = {
    'mongodb': 'server1',
    'mysql': 'server2',
    'connections': {
        'server1': {
            'dsn': 'mongodb://localhost:27017/malangsoftware',
            'dbname': 'malangsoftware'
        },
        'server2': {
            'host': 'localhost',
            'port': 3306,
            'user': 'root',
            'pass': '',
            'db': '',
        },
        'server3': '',
        'server4': '',
        'server5': ''
    }
    // 'malangsoftwaregroup': {
    //     'dsn': 'mongodb://development:mlg123@94.237.66.156:27017/malangsoftwaregroup?authSource=malangsoftwaregroup',
    //     'dbname': 'malangsoftwaregroup',
    //     'dbhost': '94.237.66.156',
    //     'dbport': 27017,
    //     'dbuser': 'development',
    //     'dbpass': 'mlg123',
    //     'authdb': 'malangsoftwaregroup'
    // }
}

module.exports = {
    connections,
    mongodb_conf: connections[mongodb],
    mysql_conf: connections[mysql]
}
