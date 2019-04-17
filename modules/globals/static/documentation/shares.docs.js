'use strict'

const definitions = require('./definitions')

module.exports = {
    getPath: () => {
        return {
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
    },
    publish: function () {
        return {
            swagger: '2.0',
            info: {
                title: 'Shares API',
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
            schemes: [],
            produces: [
                'application/json'
            ],
            definitions: definitions.schemas,
            paths: this.getPath()
        }
    }
}