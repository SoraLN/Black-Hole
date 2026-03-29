import express from "express";
import { insert_user } from "../database/usuariosModel.js";;

const router = express.Router();

router.post("/usuarios", (req, res)=>{

    const {nome, email, senha} = req.body

    try{
        insert_user(nome, email, senha)
    } catch(error){
        console.error("Erro na rota da api: ", error.mensagem)
    }

    if(!nome || !email || !senha){
        return res.status(400).json({ erro: "Preencha tudo" });
    }

    res.json({ mensagem: "Usuario Criado!"})

})

export default router;