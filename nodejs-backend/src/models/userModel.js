import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            idUser: true,
            name: true,
            email: true,
            password: false
        }
    })

    return users
}

const create = () => {

}

