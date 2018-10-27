'use strict'

module.exports = {
    main: async (request, response) => {
        response.send('home\'s server running...')
    },
    docs: async (request, response) => {
        response.send('docs')
    }
}
