import { Module } from "@nestjs/common";
import { DatabaseProvider } from "./providers/database.provider";

@Module({
    providers: [...DatabaseProvider],
    exports: [...DatabaseProvider]
})

export class DatabaseModule {}