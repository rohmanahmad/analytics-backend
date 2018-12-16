'use strict'

const InvitationC = use('InvitationContacts.Model')
const utils = use('Utils.Helper')

module.exports = {
    main: async (request, response) => {
        response.render('events.rohmanweb/index')
    },
    wedding: async (request, response) => {
        const {uid} = request.query
        let data = {}
        if (uid) {
            data = await InvitationC.find({_id: uid})
            data = data[0] || {}
        }
        response.render('events.rohmanweb/wedding', {data})
    }
}
