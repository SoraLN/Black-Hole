import { conectar } from './db.js'

export const selecionar = async () => {
    try{
        
        const con = await conectar()

        const [linhas] = await con.query('SELECT * FROM usuario')

        return linhas
        
    } catch(error){

        console.error('⚠️ Erro ao INSERIR Usuario:')
        console.error(error.message)
    
        return []
    }
}