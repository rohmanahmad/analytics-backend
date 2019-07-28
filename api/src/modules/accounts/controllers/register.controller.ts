import {Controller, Post, Body, HttpException, HttpStatus} from '@nestjs/common'
import {RegisterService} from '../services/register.service'
import {RegisterReqDTO, RegisterResDTO} from '../dto/register.dto'

@Controller()
export class RegisterController {
    constructor(private readonly regSrv: RegisterService) {}

    @Post('/account/register')
    main(@Body() register: RegisterReqDTO) : RegisterResDTO {
        try {
            const data: RegisterResDTO = this
                .regSrv
                .register(register)
            return data
        } catch (err) {
            throw new HttpException({
                message: 'Bad Request',
                error: err.message
            }, 400)
        }
    }
}