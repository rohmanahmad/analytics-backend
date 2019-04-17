'use strict'

const definitions = require('./definitions')

module.exports = {
    getPath: () => {
        return {
            '/login': {
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
    },
    publish: function () {
        return {
            swagger: '2.0',
            info: {
                title: 'Admin Accounts API',
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