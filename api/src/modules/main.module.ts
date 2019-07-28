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

    @Get('/status')
    status() : object {
        return {
            statusCode: 200,
            message: 'OK',
            status: {
                databases: {
                    db1: 'active',
                    db2: 'active'
                },
                servers: {
                    a: 'active',
                    b: 'stop',
                    c: 'active'
                }
            }
        }
    }
}

@Module({
    controllers: [MainController]
})

export class MainModule {}