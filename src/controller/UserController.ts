import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async signup(req: Request, res: Response) {

        try {
            const { email, name, password } = req.body

            await new UserBusiness().singup({email, name, password})

            //call business
            res.send({ message:"Usuário cadastrado com sucesso"})

        } catch (error) {
            res.send()
        }

    }
}