import { Module } from '@nestjs/common';

// modules
import {AccountsModule} from './modules/accounts/accounts.module'

// config modules
import { ConfigModule } from './configurations/config.module'

@Module({
  imports: [ConfigModule, AccountsModule]
})
export class AppModule {}
