import {Connection} from 'mongoose'

import {AccountsSchema} from '../../schemas/accounts.schema'

export const AccountsProvider = {
    provide: 'ACCOUNTS_MODEL',
    useFactory: (conn: Connection) => conn.model('accounts', AccountsSchema),
    inject: ['MONGO_CONNECTION']
}

/*
 # ref: https://github.com/nestjs/nest/blob/master/sample/14-mongoose-base/src/cats/cats.providers.ts
*/