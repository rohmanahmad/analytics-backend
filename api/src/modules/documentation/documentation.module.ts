import { Module } from "@nestjs/common";

import { DocumentationController } from "./controllers/docs.controller";
import { DocumentaionService } from "./services/docs.service";

@Module({
    controllers: [DocumentationController],
    providers: [DocumentaionService],
    imports: []
})

export class DocumentationModule {}
