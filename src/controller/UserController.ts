import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express";

export class UserController {
    async signup(req: Request, res: Response) {

        try {
            const { email, name, password } = req.body

            const token = await new UserBusiness().singup({ email, name, password })

            //call business
            res.send({ message: "Usuário cadastrado com sucesso", token })

        } catch (error: any) {

            if (error instanceof Error) {
                res.send(error.message).status(400).end()
            } else {
                console.log(error.sqlMessage || error.message);
                res.send("Ocorreu um erro inesperado").status(500).end()
            }
        }

    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const token = await new UserBusiness().login({ email, password })

            //call business
            res.send({ message: "Usuário cadastrado com sucesso", token })

        } catch (error: any) {

            if (error instanceof Error) {
                res.send(error.message).status(400).end()
            } else {
                console.log(error.sqlMessage || error.message);
                res.send("Ocorreu um erro inesperado").status(500).end()
            }
        }

    }
}