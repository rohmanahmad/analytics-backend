'use strict'

const definitions = require('./definitions')

const usersPaths = {
    '/users/login': {
        'post': {
            'tags': [
                'Authentication'
            ],
            'summary': 'Login',
            'description': 'Login from user',
            'parameters': [
                definitions.getData('user_email_form'),
                definitions.getData('user_password_form')
            ],
            'responses': {
                '200': {
                    'description': 'Successful response',
                    'schema': {
                        '$ref': '#/definitions/login_response'
                    }
                }
            }
        }
    }
}

const sentimentsPaths = {
    '/ai/vocabulary/': {
        'get': {
            'tags': [
                'AI_Sentiments'
            ],
            'summary': 'vocabulary list',
            'description': 'list of vocabulary',
            'parameters': [
                definitions.getData('limit_query'),
                definitions.getData('page_query'),
                definitions.getData('sort_query')
            ],
            'responses': {
                '200': {
                    'description': 'Successful response',
                    'schema': {
                        '$ref': '#/definitions/sentiments_list_response'
                    }
                }
            }
        },
        'put': {
            'tags': [
                'AI_Sentiments'
            ],
            'summary': 'vocabulary update or delete',
            'description': 'update or delete of vocabulary (multiple support)',
            'parameters': [
                definitions.getData('ai_voc_body_put')
            ],
            'responses': {
                '200': {
                    'description': 'Successful response',
                    'schema': {
                        '$ref': '#/definitions/deleted_response'
                    }
                }
            }
        }
    },
    '/ai/vocabulary/{id}': {
        'get': {
            'tags': [
                'AI_Sentiments'
            ],
            'summary': 'vocabulary find(One)',
            'description': 'find one of vocabulary',
            'parameters': [
                definitions.getData('id_path')
            ],
            'responses': {
                '200': {
                    'description': 'Successful response',
                    'schema': {
                        '$ref': '#/definitions/sentiments_find_one_response'
                    }
                }
            }
        }
    },
    '/ai/vocabulary/create': {
        'post': {
            'tags': [
                'AI_Sentiments'
            ],
            'summary': 'vocabulary create',
            'description': 'create of vocabulary',
            'parameters': [
                definitions.getData('ai_voc_body')
            ],
            'responses': {
                '200': {
                    'description': 'Successful response',
                    'schema': {
                        '$ref': '#/definitions/login_response'
                    }
                }
            }
        }
    }
}

const allPaths = {
    users: usersPaths,
    sentiments: sentimentsPaths
}

module.exports = function (group) {
    return allPaths[group]
}
