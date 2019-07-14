import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// controllers
import { RegisterController } from './controllers/registration/register.controller'
import { AuthController } from './controllers/authentication/auth.controller'

// services
import { RegisterService } from './services/register.service'
import { AuthService } from './services/auth.service'
// import { EnvService } from '../../configurations/env.service';
import { ConfigModule } from '../../configurations/config.module';

import { MongooseService } from '../../configurations/providers/mongoose.provider';

@Module({
    controllers: [RegisterController, AuthController],
    providers: [RegisterService, AuthService],
    imports: [
       /* -- cara 1
       MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (env: EnvService) => ({
                uri: env.get('MONGOURI'),
                useNewUrlParser: true
            }),
            inject: [EnvService]
        }) */
        // -- cara 2 pakai class lebih mudah dipahami untuk implementasi deps injection
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useClass: MongooseService
        })
    ]
})

export class AccountsModule {}
