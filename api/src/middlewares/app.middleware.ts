import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, Request } from "express";


@Injectable()
export class AppMiddleware implements NestMiddleware {
    use (req : Request, res: Response, next: Function) {
        console.log(`[${req.method}] ${req.originalUrl}`)
        next()
    }
}