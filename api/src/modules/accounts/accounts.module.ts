import { Module } from '@nestjs/common'

// controllers
import { AuthController } from './controllers/auth.controller'

// services
import { AuthService } from './services/auth.service'
import { AccountProvider } from './accounts.provider';
import { DatabaseModule } from '../../database.module';

@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        ...AccountProvider
    ],
    imports: [
        DatabaseModule
    ]
})

export class AccountsModule {}
