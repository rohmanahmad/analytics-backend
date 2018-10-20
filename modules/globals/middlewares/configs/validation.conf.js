'use strict'

module.exports = {
    'getapiaivocabulary': {
        'all': [{'limit': 'query'}, {'page': 'query'}, {'sort': 'query'}]
    },
    'getapiaivocabularyid': {
        'all': [{'id': 'path'}],
        'required': ['id']
    },
    'postapiaivocabularycreate': {
        'all': [{'type': 'form'}, {'indo_keyword': 'form'}, {'en_keyword': 'form'}, {'description': 'form'}],
        'required': ['type', 'indo_keyword']
    },
    'putapiaivocabulary': {
        'all': [{'action': 'form'}, {'items': 'form'}],
        'required': ['action', 'items']
    },
    'postapiuserslogin': {
        'all': [{'user_email': 'form'}, {'user_password': 'form'}],
        'required': ['user_email', 'user_password']
    }
}
