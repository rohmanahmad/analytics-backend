'use strict'

module.exports = [
    {
        path: '/documentation',
        type: 'get',
        controller: 'docs'
    },
    {
        path: '/documentation/api-docs.json',
        type: 'get',
        controller: 'apidocs'
    }
]
