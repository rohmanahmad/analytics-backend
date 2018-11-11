'use strict'

const definitions = require('./definitions')
const paths = require('./paths')('sentiments')

module.exports = {
    publish: function (host = 'localhost:8002') {
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
            host: 'localhost',
            basePath: '/',
            schemes: [
                'http'
            ],
            produces: [
                'application/json'
            ],
            paths,
            definitions: definitions.schemas
        }
    }
}