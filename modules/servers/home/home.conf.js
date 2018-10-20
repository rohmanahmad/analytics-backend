module.exports = {
    'app_port': 8000,
    'dsn': 'mongodb://development:mlg123@94.237.66.156:27017/malangsoftwaregroup?authSource=malangsoftwaregroup',
    'mongodb': {
        'db_name': 'malangsoftwaregroup',
        'db_host': '94.237.66.156',
        'db_port': 27017,
        'db_user': 'development',
        'db_pass': 'mlg123',
        'auth_db': 'malangsoftwaregroup'
    },
    'cors': {
        'domains': ['http://localhost:8080'],
        'methods': ['GET', 'POST']
    }
}
