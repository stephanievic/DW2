import {getAll} from '../../models/userModel.js'

const userList = async (req, res) => {
    const users = await getAll()

    res.status(200).json(users) 
}

export default userList