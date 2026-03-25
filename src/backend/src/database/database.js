import sqlite3 from 'sqlite3'

sqlite3.verbose()

const db = new sqlite3.Database('./banco.db', (err)=>{
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
            idade INTEGER
        )
    
    `);

    console.log('Tabela Criada ou ja Existe')
})

export default db;