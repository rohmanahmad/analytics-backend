import {Test, TestingModule} from '@nestjs/testing'
import {RegisterController} from './register.controller'
import {RegisterService} from '../services/register.service'

describe('RegisterController', () => {
    let regController: RegisterController
    let RegService: RegisterService

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [RegisterController],
            providers: [RegisterService]
        })
        .compile()
        regController = app.get<RegisterController>(RegisterController)
        RegService = app.get<RegisterService>(RegisterService)
    })

    describe('[service] getMain()', () => {
        it('should return object', () => {
            expect(
                regController.main({
                    username: 'rohman',
                    email: 'rohman@mail.com',
                    password: 'asdasd',
                    confirm: 'asdasd',
                    level: 1
                })
            ).toEqual({
                status: 200,
                message: 'ok',
                from: 'Register Service'
            })
        })
    })
})