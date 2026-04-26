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
    try{
        db.run('PRAGMA foreign_keys = on')

        db.run(`
            CREATE TABLE IF NOT EXISTS users(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                hash_senha TEXT NOT NULL,
                administrador INTEGER DEFAULT 0,
                photo_url TEXT
            )
        `); //Tabela de Usuarios

        db.run(`
            CREATE TABLE IF NOT EXISTS salaries(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                valor_salario REAL NOT NULL,
                data TEXT NOT NULL,
                created_at TEXT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        
        `); //Tabela de valores salariais

        db.run(`
            CREATE TABLE IF NOT EXISTS expenses(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                valor_lancamento REAL NOT NULL,
                descricao TEXT,
                data TEXT NOT NULL,
                created_at TEXT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        
        `); //Tabela de lançamento de despesa

        console.log("Tabelas Criadas com Sucesso!!")
    } catch(error){
        console.log("Erro Na Criação de Tabela ⚠️", error.message)
    }
})

export default db;