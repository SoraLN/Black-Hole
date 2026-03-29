import sqlite3 from "sqlite3";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

sqlite3.verbose()

const dbPath = path.resolve(__dirname, "banco.db");

const db = new sqlite3.Database(dbPath, (err)=>{
    if(err){
        console.error('Erro ao abrir o banco', err.message);
    }else{
        console.log('Banco Conectado com sucesso');
    }
});

db.serialize(()=>{
    db.run(`
        CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL
        )
    
    `);

    console.log('Tabela Criada ou Ja Existe')
})

export default db;