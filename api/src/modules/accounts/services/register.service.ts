import {Injectable} from '@nestjs/common'
import {RegisterReqDTO, RegisterResDTO} from '../controllers/registration/register.dto'

@Injectable()

export class RegisterService {
    register(data: RegisterReqDTO): RegisterResDTO {
        return {
            statusCode: 200,
            message: 'ok',
            data: {
                email: data.email,
                as: 'Admin'
            }
        }
    }
}
