import { getById } from "../../models/userModel.js"

const userById = async (req, res) => {
    const { id } = req.params

    const user = await getById(+id)

    if (user) {
        res.status(200).json({ user })
    } 

    res.status(404).json({ 
        message: 'User not found.'
    })
}
export default userByID;