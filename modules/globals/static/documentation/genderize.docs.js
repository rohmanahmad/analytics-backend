'use strict'

const definitions = require('./definitions')

module.exports = {
    getPath: () => {
        return {
            '/engines/genderize/getnamewords': {
                'post': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Get Name Words',
                    'description': 'Get Name per Word',
                    'parameters': [
                        definitions.getData('name_form', 'abdul rohman, silvia putri', 'limit by coma(,)')
                    ],
                    'responses': {
                        '200': {
                            'description': 'Successful response',
                            'schema': {
                                '$ref': '#/definitions/success_response'
                            }
                        }
                    }
                }
            },
            '/engines/genderize/getnamelist': {
                'post': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Name List',
                    'description': 'Get Gender By Name',
                    'parameters': [
                        definitions.getData('name_form', 'abdul rohman, silvia putri', 'limit by coma(,)')
                    ],
                    'responses': {
                        '200': {
                            'description': 'Successful response',
                            'schema': {
                                '$ref': '#/definitions/success_response'
                            }
                        }
                    }
                }
            },
            '/engines/genderize/update': {
                'put': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Update',
                    'description': 'Update Gender By Name',
                    'parameters': [
                        definitions.getData('name_form', 'rohman, abdul', '1 word. limit by comma(,)'),
                        definitions.getData('gender_male_form'),
                        definitions.getData('gender_female_form'),
                        definitions.getData('gender_none_form')
                    ],
                    'responses': {
                        '200': {
                            'description': 'Successful response',
                            'schema': {
                                '$ref': '#/definitions/success_response'
                            }
                        }
                    }
                }
            },
            '/engines/genderize/remove': {
                'delete': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Remove',
                    'description': 'Remove Gender By Name',
                    'parameters': [
                        definitions.getData('name_form', 'akhmad', 'Hanya 1 word'),
                    ],
                    'responses': {
                        '200': {
                            'description': 'Successful response',
                            'schema': {
                                '$ref': '#/definitions/success_response'
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