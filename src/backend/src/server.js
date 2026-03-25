import express from 'express';

const app = express()
const porta = process.env.PORTA

app.get('/', (req, res)=>{
    res.send('Deu Boa')
})

app.listen(porta || 3000, ()=>{
    console.log('Servidor OK!')
})