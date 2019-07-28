import { Connection } from 'mongoose'
import { UserAccounts } from './schemas/user_accounts.schema'

export const AccountProvider = [
    {
        provide: 'UserAccountModel',
        useFactory: (conn: Connection) => conn.model('UserAccounts', UserAccounts, 'user_accounts'),
        inject: ['MongoDB_1_Connection']
    }
]