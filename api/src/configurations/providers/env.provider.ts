import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

const current = __dirname

export class EnvService {
    private readonly env: { [key: string] : string }
    constructor(filepath: string) {
        const envpath = path.join(current, '../..', 'environments', filepath)
        this.env = dotenv.parse(fs.readFileSync(envpath))
    }
    get(key: string) : string {
        return this.env[key]
    }
}