import express from 'express';
import userList from '../controllers/user/userList.js';
import userByID from '../controllers/user/userByID.js';
import createUser from '../controllers/user/createUser.js';
import editUser from '../controllers/user/editUser.js';
import editName from '../controllers/user/editName.js';
import deleteUser from '../controllers/user/deleteUser.js';

const router = express.Router();

//método get para "pegar" um dado (requisição)
router.get('/', userByID);

router.get('/list', userList);

//método post para salvar dados
router.post('/', createUser);

//método put para alterar dados
router.put('/', editUser);

//método patch para editar dados especificos/parciais
router.patch('/', editName);

//método delete para deletar dados
router.delete('/', deleteUser);

export default router;