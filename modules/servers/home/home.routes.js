'use strict'

module.exports = [
    {
        path: '/',
        type: 'get',
        controller: 'main'
    },
    {
        path: '/documentation',
        type: 'get',
        controller: 'docs'
    },
    {
        path: '/api-docs.json',
        type: 'get',
        controller: 'apidocs'
    }
]
