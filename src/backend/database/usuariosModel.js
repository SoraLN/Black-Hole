import db from './database.js';

export function insert_user(nome, email, senha){
        db.run(
        `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`,
        [nome, email, senha],
        function(err) {
            if(err) {
                return console.error('Erro ao inserir', err.message);
            };
            console.log('Usuario inseriodo com sucesso', this.lastID);
        }
    );
}

function select_user(){
        db.all(`SELECT * FROM usuarios;`, [], (err, rows)=>{
        if(err) {
            return console.error("Erro ao buscar: ", err.message);
        }

        console.log('Usuario: ', rows);
    })
}