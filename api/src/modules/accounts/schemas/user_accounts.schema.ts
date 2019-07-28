import * as mongoose from 'mongoose';

export const UserAccounts = new mongoose.Schema({
    username: String,
    email: String,
    password: {
        hash: String,
        salt: String
    },
    status: Number,
    roles: {
        read: [],
        write: [],
        is_admin: Boolean
    },
    information: {
        first_name: String,
        last_name: String,
        birthday: {
            date: Date,
            place: String
        },
        contact: {
            whatsapp: String,
            line: String,
            facebook: String,
            twitter: String,
            linkedin: String
        },
        others: {}
    }
})