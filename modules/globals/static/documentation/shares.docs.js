'use strict'

const definitions = require('./definitions')
const paths = require('./paths')('shares')

module.exports = {
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
            host: '',
            basePath: '/',
            schemes: [],
            produces: [
                'application/json'
            ],
            paths,
            definitions: definitions.schemas
        }
    }
}