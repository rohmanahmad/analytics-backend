'use strict'

module.exports = {
    main: async (request, response) => {
        response.render('admin.rohmanwebid/index')
    },
    login: async (request, response) => {
        const {email, password} = request.body
        console.log({email, password}, request.validInput)
        response.render('admin.rohmanwebid/index')
    }
}
