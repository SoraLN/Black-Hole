import { conectar } from './db.js'

export const registrar = async (usuario_nome, usuario_email, usuario_senha) => {
    try{
        
        const con = await conectar()

        const nome = usuario_nome
        const email = usuario_email
        const senha = usuario_senha

        const sql = 'INSERT INTO usuario (v_nome, v_email, v_senha) VALUES (?,?,?)'

        const valores = [nome,email,senha]

        await con.query (sql,valores)

        console.log(`✅ Usuario --> ${nome} <-- cadastrado com sucesso`)

    } catch(error){

        console.error('⚠️ Erro ao INSERIR Usuario:')
        console.error(error.message)
    
        return []
    }
}