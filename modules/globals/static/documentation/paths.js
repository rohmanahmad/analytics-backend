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
    '/analytics/sentiments/vocab/list': {
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
        }
    },
    '/analytics/sentiments/vocab/{id}': {
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
    '/analytics/sentiments/vocab/create': {
        'post': {
            'tags': [
                'AI_Sentiments'
            ],
            'summary': 'vocabulary create',
            'description': 'create of vocabulary',
            'parameters': [
                definitions.getData('type_form'),
                definitions.getData('id_key_form'),
                definitions.getData('en_key_form'),
                definitions.getData('sentiment_form'),
                definitions.getData('description_form')
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
    },
    '/analytics/sentiments/vocab/delete': {
        'get': {
            'tags': [
                'AI_Sentiments'
            ],
            'summary': 'vocabulary delete',
            'description': 'delete vocabulary',
            'parameters': [
                definitions.getData('id_query')
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

const sharesPaths = {
    '/api/new': {
        'post': {
            'tags': [
                'Shares'
            ],
            'summary': 'New Share',
            'description': 'Generate Share Url',
            'parameters': [
                definitions.getData('url_form')
            ],
            'responses': {
                '200': {
                    'description': 'Successful response',
                    'schema': {
                        '$ref': '#/definitions/share_new_response'
                    }
                }
            }
        }
    },
    '/{uniq_code}': {
        'get': {
            'tags': [
                'Shares'
            ],
            'summary': 'Goto Url',
            'description': 'Goto Url',
            'parameters': [
                definitions.getData('uniq_code_path')
            ],
            'responses': {
                '200': {
                    'description': 'Successful response',
                    'schema': {
                        '$ref': '#/definitions/share_new_response'
                    }
                }
            }
        }
    }
}

const adminPaths = {
    '/api/login': {
        'post': {
            'tags': [
                'Admin'
            ],
            'summary': 'Login',
            'description': 'Login User',
            'parameters': [
                definitions.getData('user_email_form'),
                definitions.getData('user_password_form')
            ],
            'responses': {
                '200': {
                    'description': 'Successful response',
                    'schema': {
                        '$ref': '#/definitions/share_new_response'
                    }
                }
            }
        }
    }
}
const allPaths = {
    users: usersPaths,
    sentiments: sentimentsPaths,
    shares: sharesPaths,
    admin: adminPaths
}

module.exports = function (group) {
    return allPaths[group]
}
