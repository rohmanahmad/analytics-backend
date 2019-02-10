'use strict'

const definitions = require('./definitions')

module.exports = {
    getPath: () => {
        return {
            '/brands/list': {
                'get': {
                    'tags': [
                        'Brands'
                    ],
                    'summary': 'Brands',
                    'description': 'Brands List',
                    'parameters': [
                        definitions.getData('id_query', '', 'Brand Id (multiple support separated by comma)'),
                        definitions.getData('sort_query', '', 'By name')
                    ],
                    'responses': {
                        '200': {
                            'description': 'Successful response',
                            'schema': {
                            }
                        }
                    }
                }
            },
            '/categories/list': {
                'get': {
                    'tags': [
                        'Categories'
                    ],
                    'summary': 'Categories',
                    'description': 'Categories List',
                    'parameters': [
                        definitions.getData('id_query', '', 'Category Id'),
                        definitions.getData('slug_query'),
                        definitions.getData('parent_query'),
                        definitions.getData('sort_query', '', 'By name')
                    ],
                    'responses': {
                        '200': {
                            'description': 'Successful response',
                            'schema': {
                            }
                        }
                    }
                }
            },
            '/products/list': {
                'get': {
                    'tags': [
                        'Products'
                    ],
                    'summary': 'Products',
                    'description': 'Products List',
                    'parameters': [
                        definitions.getData('limit_query'),
                        definitions.getData('page_query'),
                        definitions.getData('categories_query'),
                        definitions.getData('settings_query'),
                        definitions.getData('sort_query', '', 'By name')
                    ],
                    'responses': {
                        '200': {
                            'description': 'Successful response',
                            'schema': {
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