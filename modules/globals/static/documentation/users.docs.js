'use strict'

const definitions = require('./definitions')

module.exports = {
    publish: function () {
        return {
            swagger: '2.0',
            info: {
                title: 'User Accounts API',
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
                }
            },
            definitions
        }
    }
}