import express from 'express';
import routerUsuariosRegister from './router/inserirUsuario.js';
import routerUsuariosLogin from './router/loginUsuario.js';

export const app = express()
const porta = process.env.PORTA

app.use(express.json());

app.use(routerUsuariosRegister);
app.use(routerUsuariosLogin)

app.get('/', (req, res)=>{
    res.send('Deu Boa')
})

app.listen(porta || 3000, ()=>{
    console.log('Servidor OK!')
})  