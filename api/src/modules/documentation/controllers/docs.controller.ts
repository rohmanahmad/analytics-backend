import { Controller, Get } from '@nestjs/common';
import { DocumentaionService } from '../services/docs.service';

@Controller()
export class DocumentationController {
    constructor(private readonly docServ: DocumentaionService) {}

    @Get('/api/v1.0/documentation/specs.json')
    main () : object {
        return this.docServ.getJsonFormat()
    }
}