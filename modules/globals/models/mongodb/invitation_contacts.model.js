'use strict'

const Base = require('./_base.model')

class InvitationContacts extends Base {
    get collection () {
        return 'invitation_contacts'
    }

    get objectid () {
        return ['_id']
    }

    get schema () {
        return {
            'created_at': Date,
            'updated_at': Date,
            'name': String,
            'title': String,
            'alias': String
        }
    }
}

module.exports = new InvitationContacts().model()
