import { Module } from '@nestjs/common';

// modules
import {AccountsModule} from './modules/accounts/accounts.module'

@Module({
  imports: [AccountsModule]
})
export class AppModule {}
