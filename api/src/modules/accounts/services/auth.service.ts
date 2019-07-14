import { Injectable } from '@nestjs/common'

import {LoginInputDTO, LoginOutputDTO} from '../../accounts/controllers/authentication/auth.dto'

@Injectable()
export class AuthService {
    protected getUserLogin(username: string, password: string) : object {
        return {}
    }
    doLogin(data: LoginInputDTO) : LoginOutputDTO {
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