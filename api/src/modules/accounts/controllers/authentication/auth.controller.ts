import { Controller, Get, Post, Body, HttpException } from '@nestjs/common'

// providers
import {AuthService} from '../../services/auth.service'
// dataObject
import {LoginInputDTO, LoginOutputDTO} from './auth.dto'

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('/auth/login')
    login(@Body() data: LoginInputDTO) : LoginOutputDTO {
        try {
            return this.authService.doLogin(data)
        } catch (err) {
            throw new HttpException({
                status: 400,
                message: 'bad request',
                error: err.message
            }, 400)
        }
    }
}