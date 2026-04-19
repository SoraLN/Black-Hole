import express from "express";
import { select_user } from "../database/usuariosModel.js";;
import bcrypt from 'bcrypt';

const router = express.Router();

router.post("/auth/login", async (req, res)=> {
    const {email, senha} = req.body;
    
    try{
      const user = await select_user(email);

      if(!user){
        return res.status(404).json({ erro: "Usuario Nao Encontrado"})
      }

      const senhaCorreta = await bcrypt.compare(senha, user.hash_senha)

      if(!senhaCorreta){
        return res.status(401).json({ Erro: "Senha Incorreta", Senha: senhaCorreta})
      }

      res.json({ mensagem: "OK", user})
    } catch(error){
        console.error("Erro na busca", error.mensagem)
        res.json(500).json({ erro: "Erro no servidor"})
    }

})

export default router;