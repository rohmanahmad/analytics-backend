import { Controller, Get, Post, Body, HttpException, UseFilters } from '@nestjs/common'

// providers
import {AuthService} from '../services/auth.service'
// dataObject
import {LoginInputDTO, LoginOutputDTO} from '../dto/auth.dto'

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('/api/v1/auth/login')
    async login(@Body() data: LoginInputDTO) {
        try {
            return await this.authService.doLogin(data)
        } catch (err) {
            throw new HttpException(err.message, 400)
        }
    }

    @Get('/test/insert/user-account')
    async testUserAccount () {
        try {
            await this.authService.testCreateUserAccount()
            return 'ok'
        } catch (err) {
            throw new HttpException(err.message, 400)
        }
    }

    @Get('/test')
    async test () {
        try {
            const data = {username: 'rohmanahmad', password: 'ini_hash_acak_acakan_ya'}
            const {username, email} = await this.authService.doLogin(data)
            return {
                statusCode: 200,
                message: 'ok',
                data: {
                    username,
                    email,
                    // username: '',
                    // email: '',
                    token: {
                        hash: 'THIS_IS_HASH_WITH_SALT',
                        ttl: new Date().getTime()
                    }
                }
            }
        } catch (err) {
            throw new HttpException(err.message, 400)
        }
    }
}