import { Module } from '@nestjs/common'

// controllers
import {RegisterController} from './controllers/registration/register.controller'
import {AuthController} from './controllers/authentication/auth.controller'

// services
import {RegisterService} from './services/register.service'
import { AuthService } from './services/auth.service';

@Module({
    controllers: [RegisterController, AuthController],
    providers: [RegisterService, AuthService]
})

export class AccountsModule {}
