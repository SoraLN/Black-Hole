import express from 'express'
import bodyParser from 'body-parser'
import { registrar } from '../mysql/registrar.js'

const app  = express()
const porta = 3000

app.get('/registrar', (req, res) => {
    try{
        const dadosRecebidos = req.body;
        
        console.log('Dados recebidos do frontend:', dadosRecebidos);

            res.status(200).json({
            mensagem: 'Dados recebidos com sucesso!',
            seusDados: dadosRecebidos
  });

    } catch (error){
        console.error(`Erro na execução`, error.message)
    }
})

app.listen(porta, ()=>{console.log("Servidor OK!")})