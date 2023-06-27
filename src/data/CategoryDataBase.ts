import { PrismaClient } from "@prisma/client";

export class CategoryDataBase  extends PrismaClient {

    createPrismaCategory = async (category:any) => {

        await this.category.create({ data: category })

    }

}