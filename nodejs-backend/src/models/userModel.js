import {PrismaClient} from '@prisma/client'
import {z}from 'zod'

const prisma = new PrismaClient()

const userSchema = z.object({
    id: z.number({message: "O ID deve ser um número inteiro"}).positive(),
    name: z.string().min(3).max(100),
    email: z.string().email().max(200),
    password: z.string().min(6).max(256)
})

export const validateUser = (user) => {
    return userSchema.safeParse()
}

export const validateUserToCreate = (user) =>{
    const partialUserSchema = userSchema.partial({
        id: true
    })
    return partialUserSchema.safeParse(user)
}
export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: false
        }
    })

    return users
}

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },

        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return user
}

export const create = async (user) => {
    const result = await prisma.user.create({
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return result
}

export const remove = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return user
}

export const update = async (user) => {
    const result = await prisma.user.update({
        where: {
            id: user.id
        },
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return result
}

