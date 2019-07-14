import * as mongoose from 'mongoose'

export const AccountsSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    level: Number
})