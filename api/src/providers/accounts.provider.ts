import {Connection} from 'mongoose'

import {AccountsSchema} from '../schemas/accounts.schema'

export const accounts = {
    provide: 'ACCOUNTS_MODEL',
    useFactory: (conn: Connection) => conn.model('accounts', AccountsSchema),
    inject: ['']
}