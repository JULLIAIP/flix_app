import { Request, Response } from "express";
import { CategoryBusiness } from "../business/CategoryBusiness";

export class CategoryController {
    async getAllCategory(req: Request, res: Response) {
        try {

        } catch (error: any) {

            if (error instanceof Error) {
                res.send(error.message).status(400).end()
            } else {
                console.log(error.sqlMessage || error.message);
                res.send("Ocorreu um erro inesperado").status(500).end()
            }
        }
    }
    async createCategory(req: Request, res: Response) {
        try {

            const {name} = req.body
            const token = req.headers.authorization

            const result = await new CategoryBusiness().createCategory(name, token!)

            res.send(result).status(201)

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