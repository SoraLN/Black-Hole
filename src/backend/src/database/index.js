import db from './database.js';

db.run(
    `INSERT INTO usuarios (nome, idade) VALUES (?, ?)`,
    ['Breno', 20],
    function(err) {
        if(err) {
            return console.error('Erro ao inserir', err.message);
        };
        console.log('Usuario inseriodo com sucesso', this.lastID);
    }
);

db.all(`SELECT * FROM usuarios;`, [], (err, rows)=>{
    if(err) {
        return console.error("Erro ao buscar: ", err.message);
    }

    console.log('Usuario: ', rows);
})