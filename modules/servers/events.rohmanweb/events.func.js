'use strict'

module.exports = {
    main: async (request, response) => {
        response.render('events.rohmanweb/index')
    },
    wedding: async (request, response) => {
        response.render('events.rohmanweb/wedding')
    }
}
