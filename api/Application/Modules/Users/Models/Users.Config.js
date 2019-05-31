'use strict'

module.exports = {
    collection: 'users',

    connection: 'mongodb1',

    schema: {
        uuid: String,
        username: String,
        email: String,
        password: String,
        roles: {
            admin: Boolean,
            manager: Boolean,
            supervisor: Boolean,
            agent: Boolean,
            guest: Boolean
        },
        activation: {
            token: String,
            sms_code: String,
            link: String,
            expired: Number
        },
        profile: {
            name: {
                fullname: String,
                firstname: String,
                middlename: String,
                lastname: String
            },
            birthday: {
                place: String,
                day: Number,
                month: Number,
                year: Number
            },
            address: String,
            options: {
                hobbies: [],
                religion: String,
                socials: {
                    facebook: String,
                    twitter: String,
                    instagram: String,
                    linkedin: String
                },
                website: [],
                jobtitle: String,
                education: {}
            }
        }
    }
}
