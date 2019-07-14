import { Controller, Get, Module } from "@nestjs/common";

@Controller()
class MainController {
    @Get('/')
    main() : object {
        return {
            statusCode: 200,
            message: 'OK'
        }
    }
}

@Module({
    controllers: [MainController]
})

export class MainModule {}