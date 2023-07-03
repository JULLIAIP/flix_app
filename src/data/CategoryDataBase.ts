import { PrismaClient } from "@prisma/client";

export class CategoryDataBase  extends PrismaClient {


    getAllPrismaCategories = async () => {
        const result = await this.category.findMany()
        return result
    }

    getPrismaCategoriesByName =async (name:string) => {
        const result = await this.category.findUnique({ where: {name} })
        return result
        
    }

    createPrismaCategory = async (category:any) => {

        await this.category.create({ data: category })

    }

}