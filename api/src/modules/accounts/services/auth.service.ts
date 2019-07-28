import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { LoginInputDTO, LoginOutputDTO } from '../dto/auth.dto'
import { UserAccountInterface } from '../interfaces/user_accounts.interface';

@Injectable()
export class AuthService {
    constructor (@Inject('UserAccountModel') private readonly AccountModel: Model<UserAccountInterface>) {}
    
    async findByUsernameOrEmail (username : string) : Promise <UserAccountInterface>{
        let criteria: object = {username}
        if (username.indexOf('@') > 0) {
            criteria = {email: username}
        }
        const account = await this.AccountModel.findOne(criteria)
        return account ? account.toJSON() : account
    }

    async doLogin(data: LoginInputDTO) : Promise<LoginOutputDTO> {
        try {
            const user = await this.findByUsernameOrEmail(data.username)
            if (!user) throw new Error('Invalid User or Password')
            if (user.password.hash !== data.password) throw new Error('Wrong User or Password')
            const {email, username} = user
            return {
                username,
                email,
                token: {
                    hash: '',
                    ttl: new Date().getTime()
                }
            }
        } catch (err) {
            throw err
        }
    }

    async testCreateUserAccount () {
        try {
            this.AccountModel.create({
                username: 'rohmanahmad',
                email: 'rohmanahmad@gmail.com',
                password: {
                    hash: 'ini_hash_acak_acakan_ya',
                    salt: 'ini_salt_sangat_asin'
                },
                status: 1,
                roles: {
                    read: [],
                    write: [],
                    is_admin: true
                },
                information: {
                    first_name: 'rohman',
                    last_name: 'ahmad',
                    birthday: {
                        date: '2013-01-01',
                        place: 'jember'
                    },
                    contact: {
                        whatsapp: '082332303039',
                        line: '082112332443',
                        facebook: 'rohmanwebid001',
                        twitter: 'rohmanwebid001',
                        linkedin: 'rohmanahmad'
                    },
                    others: {}
                }
            })
        } catch (err) {
            throw err
        }
    }
}