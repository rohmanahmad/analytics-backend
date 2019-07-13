export class LoginInputDTO {
    username: string
    password: string
}

export class LoginOutputDTO {
    readonly statusCode: number
    readonly message: string
    readonly data: {
        username: string,
        level: string,
        token: {
            hash: string
            ttl: number
        }
    }
}