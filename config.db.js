module.exports = {
    'mongodb': 'server1',
    'mysql': 'server2',
    'connections': {
        'server1': 'mongodb://localhost:27017/db',
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
}