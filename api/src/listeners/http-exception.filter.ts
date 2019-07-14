import { Catch, HttpException, ExceptionFilter, ArgumentsHost } from '@nestjs/common'
import { Response, Request } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(
        exception: HttpException,
        host: ArgumentsHost
    ) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()
        const status = exception.getStatus()
        const message = 'bad request'
        const error = exception.message

        response
            .status(status)
            .send({
                statusCode: status,
                message,
                timestamp: new Date().toISOString(),
                path: request.url,
                error
            })
    }
}