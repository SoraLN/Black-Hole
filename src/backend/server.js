import express from 'express';
import routerUsuarios from './router/inserirUsuario.js';

export const app = express()
const porta = process.env.PORTA

app.use(express.json());

app.use(routerUsuarios);

app.get('/', (req, res)=>{
    res.send('Deu Boa')
})

app.listen(porta || 3000, ()=>{
    console.log('Servidor OK!')
})  