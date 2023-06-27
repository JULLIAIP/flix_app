import { CategoryDataBase } from "../data/CategoryDataBase"
import { IdGenerate } from "../services/IdGenerate"
import { TokenManager } from "../services/TokenManager"

export class CategoryBusiness {
    async getAllCategory() { }

    async createCategory(name: string, token: string) {

        if (!token) {
            throw new Error("Informe o token de acesso")
        }
        const verifiedToken = new TokenManager().getData(token)

        if (!verifiedToken) {
            throw new Error("Usuário sem permissão")
        }
        
        //id
        const id = new IdGenerate().generate()

        const newCategory = { id, name }

        await new CategoryDataBase().createPrismaCategory(newCategory)

        return newCategory

    }
}