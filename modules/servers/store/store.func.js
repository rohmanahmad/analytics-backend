'use strict'

module.exports = {
    main: async (request, response) => {
        response.render('store/index')
    },
    mobile: async (request, response) => {
        const isDev = request.query.dev === 'true'
        response.render('store/mobile', {isDev})
    }
}
