'use strict'

module.exports = [
    {
        path: '/',
        type: 'get',
        controller: 'main',
        middlewares: [
        ]
    },
    {
        path: '/analytics/vocab/list',
        type: 'get',
        controller: 'vocabList',
        middlewares: [
            'auth',
            'input'
        ]
    },
    {
        path: '/analytics/vocab/:id',
        type: 'get',
        controller: 'vocabOne',
        middlewares: [
            'auth',
            'input'
        ]
    },
    {
        path: '/analytics/vocab/delete',
        type: 'get',
        controller: 'vocabDelete',
        middlewares: [
            'auth',
            'input'
        ]
    },
    {
        path: '/analytics/vocab/update',
        type: 'post',
        controller: 'vocabUpdate',
        middlewares: [
            'auth',
            'input'
        ]
    },
    {
        path: '/analytics/vocab/create',
        type: 'post',
        controller: 'vocabNew',
        middlewares: [
            'auth',
            'input'
        ]
    },
    {
        path: '/analytics/vocab/from-sentences',
        type: 'post',
        controller: 'vocabGetFromSentences',
        middlewares: [
            'auth',
            'input'
        ]
    },
    {
        path: '/wordlist',
        type: 'get',
        controller: 'viewWordList',
        middlewares: []
    }
]
