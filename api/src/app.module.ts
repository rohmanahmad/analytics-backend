import { Module } from '@nestjs/common';

// modules
import { AccountsModule } from './modules/accounts/accounts.module'
import { MainModule } from './modules/main.module';

// config modules
import { ConfigModule } from './configurations/config.module'

@Module({
  imports: [
    MainModule,
    AccountsModule
  ],
  providers: [ConfigModule]
})
export class AppModule {}
