//const express = require('express');
import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import { ENVIRONMENT, PORT, HOST } from './config.js';

const app = express(); //objeto app contém todas as funções do express

app.use(express.json())

app.get('/', (req, res) => { 
    res.json({
        message: 'Welcome to API backend - DW2'
    })
})

app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando em ambiente ${ENVIRONMENT} em ${ENVIRONMENT === 'production' ? HOST : HOST + ':' + PORT}`);
});