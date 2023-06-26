import { PrismaClient } from '@prisma/client';
import { User } from '../models/User';


export class UserDataBase extends PrismaClient {

    getAllPrismaUsers = async () => {
        const result = await this.user.findMany()
        return result
    }
    //criado na aula de arquitetura
    getUserByEmail = async (email: string) => {
        const result = await this.user.findUnique({ where: { email } })
        return result
    }

    createPrismaUsers = async (user:any) => {

        await this.user.create({ data: user })

    }
    updatePrismaUser = async (id: string, data: Partial<User>) => {
        await this.user.update({
            where: { id },
            data,
        });
    };

    deletePrismaUsers = async (id: string) => {

        await this.user.delete({ where: { id } })

    }


}