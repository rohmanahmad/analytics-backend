import { MongooseOptionsFactory } from "@nestjs/mongoose";
import { EnvService } from "./env.provider";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MongooseService implements MongooseOptionsFactory {
    constructor(private readonly env: EnvService) {}
    createMongooseOptions() {
        return {
            uri: this.env.get('MONGOURI'),
            useNewUrlParser: true
        }
    }
}