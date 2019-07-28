// DB module
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '../app.config.module'


import { MongooseOptionsFactory } from "@nestjs/mongoose";
import { EnvService } from "./env.provider";
import { Injectable } from "@nestjs/common";

@Injectable()
class MongooseService implements MongooseOptionsFactory {
    constructor(private readonly env: EnvService) {}
    createMongooseOptions() {
        return {
            uri: this.env.get('MONGOURI'),
            useNewUrlParser: true
        }
    }
}

export const MongodbProvider = MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useClass: MongooseService
})