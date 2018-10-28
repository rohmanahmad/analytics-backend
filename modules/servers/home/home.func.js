'use strict'

const docs = use('modules/globals/static/documentation/home.docs')

module.exports = {
    main: async (request, response) => {
        response.send('home\'s server running...')
    },
    docs: async (request, response) => {
        response.render('docs/index', docs.publish())
    },
    apidocs: async (request, response) => {
        response.json(docs.publish())
    }
}
