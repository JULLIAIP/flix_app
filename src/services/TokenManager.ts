import * as JWT  from "jsonwebtoken";

export class TokenManager{
    generate(plainText: string){
        return JWT.sign(plainText, process.env.JWT_KEY)
    }
    getData(){}
}