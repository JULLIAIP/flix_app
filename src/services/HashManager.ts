import * as bcrypt from 'bcrypt'

export class HashManager {
    async hash(password: string) {
        const cost = 10;
        const salt = await bcrypt.genSalt(cost)
        return bcrypt.hash(password, salt)

    }
    compare(password: string, hash: string) {

        return bcrypt.compare(password, hash)
    }
}