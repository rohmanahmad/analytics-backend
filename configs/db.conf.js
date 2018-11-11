'use strict'

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
            'db': ''
        },
        'server3': '',
        'server4': '',
        'server5': ''
    }
}

module.exports = {
    connections,
    mongodb: connections[mongodb],
    mysql: connections[mysql]
}
