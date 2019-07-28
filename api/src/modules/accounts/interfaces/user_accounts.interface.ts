import { Document } from 'mongoose'

export interface UserAccountInterface extends Document {
    readonly username: string,
    readonly email: string,
    readonly password: {
        hash: string,
        salt: string
    },
    readonly status: number,
    readonly roles: object,
    readonly information: object
}