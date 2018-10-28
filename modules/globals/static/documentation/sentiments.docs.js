'use strict'

const definitions = require('./definitions')

module.exports = {
    publish: function (host = 'http://localhost:8000') {
        return {
            swagger: '2.0',
            info: {
                title: 'Sentiments API',
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
            host,
            basePath: '/api',
            schemes: [
                'http'
            ],
            produces: [
                'application/json'
            ],
            paths: {
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