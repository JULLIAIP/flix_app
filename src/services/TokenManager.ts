import * as JWT from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

export class TokenManager {
    generate(plainText: string) {
        return JWT.sign(plainText, process.env.JWT_KEY!)
    }
    getData(token: string) {
        return JWT.verify(token, process.env.JWT_KEY!)
    }
}