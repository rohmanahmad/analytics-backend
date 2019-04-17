'use strict'

const docs = use('modules/globals/static/documentation/home.docs')

module.exports = {
    main: async (request, response) => {
        response.send('home\'s server running...')
    },
    docs: async (request, response) => {
        if (request.query.url) {
            response.render('docs/index', docs.publish())
        } else {
            const url = request.hostname
            const apidocs = `${request.protocol}://${url}/api-docs.json`
            response.redirect(`/documentation?url=${apidocs}`)
        }
    },
    apidocs: async (request, response) => {
        response.json(docs.publish())
    }
}
