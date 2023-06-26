import { UserDataBase } from "../data/UserDataBase";
import { User } from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGenerate } from "../services/IdGenerate";

export class UserBusiness {

    async singup({ email, name, password }: any) {

        if (!email || !name || !password) {
            throw new Error("Fields email, name, password are required")
        }

        //id
        const id = new IdGenerate().generate()

        //hash
        const hash: string = await new HashManager().hash(password)

        //insert user - call data
        const newUser = new User(id, name, email, hash)

        await new UserDataBase().createPrismaUsers(newUser)

        //token

        const token = '';

        return token

    }

}