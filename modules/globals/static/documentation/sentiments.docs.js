'use strict'

const definitions = require('./definitions')

module.exports = {
    getPath: () => {
        return {
            '/analytics/vocab/list': {
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
            '/analytics/vocab/{id}': {
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
            '/analytics/vocab/create': {
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
            '/analytics/vocab/delete': {
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
            },
            '/analytics/vocab/from-sentences': {
                'post': {
                    'tags': [
                        'AI_Sentiments'
                    ],
                    'summary': 'vocabulary from sentences',
                    'description': 'from sentences vocabulary',
                    'parameters': [
                        definitions.getData('sentence_form')
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
    },
    publish: function (config = {}) {
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
            host: (config.domain || 'localhost'),
            basePath: '/',
            schemes: [
                'http'
            ],
            produces: [
                'application/json'
            ],
            definitions: definitions.schemas,
            paths: this.getPath()
        }
    }
}