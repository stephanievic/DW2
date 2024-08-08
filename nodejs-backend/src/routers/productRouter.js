import express from 'express';
import productList from '../controllers/product/productList.js';
import createProduct from '../controllers/product/createProduct.js';
import updateProduct from '../controllers/product/updateProduct.js';
import editProduct from '../controllers/product/editProduct.js';
import deleteProduct from '../controllers/product/deleteProduct.js';

const router = express.Router();

router.get('/', productList);

router.post('/', createProduct);

router.put('/', updateProduct);

router.patch('/', editProduct);

router.delete('/', deleteProduct);

export default router;