import { UserDataBase } from "../data/UserDataBase";
import { User } from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGenerate } from "../services/IdGenerate";
import { TokenManager } from "../services/TokenManager";

export class UserBusiness {

    async singup({ email, name, password }: any) {

        if (!email || !name || !password) {
            throw new Error("Fields email, name, password are required")
        }

        const user = await new UserDataBase().getUserByEmail(email);

        if (user) {
            throw new Error('Email já cadastrado')
        }
        //id
        const id = new IdGenerate().generate()

        //hash
        const hash: string = await new HashManager().hash(password)

        //insert user - call data
        const newUser = new User(id, name, email, hash)

        await new UserDataBase().createPrismaUsers(newUser)

        //token

        const token = new TokenManager().generate(id);

        return token

    }

}