import express from "express";
import { insert_user } from "../database/usuariosModel.js";;
import bcrypt from 'bcrypt';

const router = express.Router();

router.post("/usuarios", async (req, res)=>{

    const {nome, email, senha} = req.body
    const senhaString = JSON.stringify(senha); //codigo para transformar a senha em uma string, pois ela esta vindo em obj e nao entra no banco de dados

    const senhaHash = await bcrypt.hash(senhaString, 10)

    if(!nome || !email || !senha){
        return res.status(400).json({ erro: "Preencha tudo" });
        res.json({ mensagem: "Usuario Criado!"})
    }

    try{
        insert_user(nome, email, senhaHash)
    } catch(error){
        console.error("Erro na rota da api: ", error.mensagem)
    }

})

export default router;