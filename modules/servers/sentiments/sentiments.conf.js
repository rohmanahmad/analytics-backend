module.exports = {
    'port': 8002,
    'accepted_vocab_type': ['V', 'N', 'ADJ', 'C', 'PN'],
    'default_vocab_desc': {
        'PN': 'Pronoun (kata ganti orang)',
        'V': 'verb (kata kerja)',
        'N': 'noun (kata benda)',
        'ADJ': 'adjective (kata sifat)',
        'C': 'conjuction (kata sambung)'
    },
    'cors': {
        'domains': ['http://localhost:8080'],
        'methods': ['GET', 'POST']
    }
}
