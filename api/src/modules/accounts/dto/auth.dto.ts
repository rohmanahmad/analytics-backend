export class LoginInputDTO {
    username: string
    password: string
}

export class LoginOutputDTO {
    readonly username: string,
    readonly email: string,
    readonly token: {
        hash: string
        ttl: number
    }
}