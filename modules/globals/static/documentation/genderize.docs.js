'use strict'

const definitions = require('./definitions')

module.exports = {
    getPath: () => {
        return {
            '/engines/genderize/get/name': {
                'post': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Get Name',
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
            '/engines/genderize/get/name/words': {
                'post': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Get Name (words)',
                    'description': 'Get Name per Word',
                    'parameters': [
                        definitions.getData('name_form', 'abdul, rohman, silvia, putri', 'limit by coma(,)')
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
            '/engines/genderize/update/name': {
                'put': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Update Name',
                    'description': 'Update Gender By (words)',
                    'parameters': [
                        definitions.getData('name_form', 'abdul rohman, silvia putri', 'limit by comma(,)'),
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
            '/engines/genderize/update/name/words': {
                'put': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Update Name (words)',
                    'description': 'Update Gender By Name',
                    'parameters': [
                        definitions.getData('name_form', 'abdul, rohman, silvia, putri', '1 word. limit by comma(,)'),
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
            '/engines/genderize/remove/name': {
                'delete': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Remove Name',
                    'description': 'Remove Gender By Name',
                    'parameters': [
                        definitions.getData('name_form', 'abdul rohman, silvia putri', '(limit by comma)'),
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
            '/engines/genderize/remove/name/words': {
                'delete': {
                    'tags': [
                        'Genderize'
                    ],
                    'summary': 'Remove Name (words)',
                    'description': 'Remove Gender By (words)',
                    'parameters': [
                        definitions.getData('name_form', 'abdul, rohman, silvia, putri', '1 word (limit by comma)'),
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