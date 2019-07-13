export class RegisterReqDTO {
    readonly username: string
    readonly email: string
    readonly password: string
    readonly confirm: string
    readonly level: number
}

export class RegisterResDTO {
    readonly statusCode: number
    readonly message: string
    readonly data: {
        readonly email: string,
        readonly as: string
    }
}