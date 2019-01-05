'use strict'

const Settings = use('Settings.Helper')
const {dsn} = Settings('events')
const Models = use('Models')
const InvitationC = new Models('InvitationContacts.Model', dsn)

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
