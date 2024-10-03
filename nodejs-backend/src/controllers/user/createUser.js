import { create, validateUser } from '../../models/userModel.js'

const createUser = async (req, res) => {
    const dataUser = req.body

    const userValidated = validateUser(user)
    console.log(userValidated)

    if(userValidated?.error) {
        return res.status(400).json({
            error: "Erro ao criar usuário, verifique os dados!",
            fieldErrors: userValidated.error.flatten().fieldErrors
        })
    }

    const userCreated = await create(dataUser)

    if (userCreated) {
        res.status(200).json({
            message: 'User created with sucess!',
            user: userCreated
        })
    }

    res.status(500).json({
        message: 'Error to create user!'
    })
}

export default createUser;