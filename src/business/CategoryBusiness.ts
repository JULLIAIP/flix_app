import { CategoryDataBase } from "../data/CategoryDataBase"
import { IdGenerate } from "../services/IdGenerate"
import { TokenManager } from "../services/TokenManager"

export class CategoryBusiness {
    async getAllCategory() {

        const allCategories = await new CategoryDataBase().getAllPrismaCategories()

        return allCategories
    }

    async createCategory(name: string, token: string) {

        const checkCategory = await new CategoryDataBase().getPrismaCategoriesByName(name)

        if (checkCategory) {
            throw new Error(`Essa categoria já existe ${checkCategory.id}`)
        }

        if (!token) {
            throw new Error("Fields email, name, password are required")
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