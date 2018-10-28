'use strict'

const definitions = require('./definitions')

module.exports = {
    publish: function () {
        return {
            swagger: '2.0',
            info: {
                title: 'Home API',
                description: 'API Documentation',
                version: '1.0.0',
                termsOfService: 'http://malangsoftware.com',
                contact: {
                    name: 'api@malangsoftware.com'
                },
                license: {
                    name: 'Apache 2.0',
                    url: 'htt://www.apache.org/licenses/LICENSE-2.0.html'
                }
            },
            host: 'http://localhost:8000',
            basePath: '/api',
            schemes: [
                'http'
            ],
            produces: [
                'application/json'
            ],
            paths: {
                '/users/login': {
                    'post': {
                        'tags': [
                            'Authentication'
                        ],
                        'summary': 'Login',
                        'description': 'Login from user',
                        'parameters': [
                            { '$ref': '#/definitions/user_email_form' },
                            { '$ref': '#/definitions/user_password_form' }
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
                '/ai/vocabulary/': {
                    'get': {
                        'tags': [
                            'AI_Sentiments'
                        ],
                        'summary': 'vocabulary list',
                        'description': 'list of vocabulary',
                        'parameters': [
                            { '$ref': '#/definitions/limit_query' },
                            { '$ref': '#/definitions/page_query' },
                            { '$ref': '#/definitions/sort_query' }
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
                            { '$ref': '#/definitions/ai_voc_body_put' }
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
                            { '$ref': '#/definitions/id_path' }
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
                            { '$ref': '#/definitions/ai_voc_body' }
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
            },
            definitions
        }
    }
}