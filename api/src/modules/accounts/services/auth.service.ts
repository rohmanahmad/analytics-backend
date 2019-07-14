import { Injectable } from '@nestjs/common'

import {LoginInputDTO, LoginOutputDTO} from '../../accounts/controllers/authentication/auth.dto'

@Injectable()
export class AuthService {
    doLogin(data: LoginInputDTO) : LoginOutputDTO {
        throw new Error('Invalid')
        return {
            statusCode: 200,
            message: 'loggedin',
            data: {
                username: '',
                level: '',
                token: {
                    hash: '',
                    ttl: new Date().getTime()
                }
            }
        }
    }
}