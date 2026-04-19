import db from './database.js';

export function insert_user(nome, email,  hash_senha){ //inserção de usuarios no database
        db.run(
        `INSERT INTO users (nome, email,  hash_senha) VALUES (?, ?, ?)`,
        [nome, email,  hash_senha],
        function(err) {
            if(err) {
                return console.error('Erro ao inserir', err.message);
            };
            console.log('Usuario inseriodo com sucesso', this.lastID);
        }
    );
}

export function select_user(email){
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
            if(err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}

function excluir_colum(){ //comando para mim (excluir depois)
        db.all(`DROP TABLE users;`, [], (err, rows)=>{
        if(err) {
            return console.error("Erro ao Excluir: ", err.message);
        }

        console.log('Excluido', rows);
    })
}