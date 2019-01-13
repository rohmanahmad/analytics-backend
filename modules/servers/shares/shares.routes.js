module.exports = [
    {
        path: '/api/new',
        type: 'post',
        controller: 'newShare',
        middlewares: [
            'input'
        ]
    },
    {
        path: '/documentation',
        type: 'get',
        controller: 'docs'
    },
    {
        path: '/documentation/api-docs.json',
        type: 'get',
        controller: 'apidocs'
    },
    {
        path: '/',
        type: 'get',
        controller: 'main',
        middlewares: [
            // input
        ]
    },
    {
        path: '/:uniq_code',
        type: 'get',
        controller: 'goToUrl',
        middlewares: [
            // input
        ]
    }
]
