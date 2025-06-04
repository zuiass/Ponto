import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'ponto'
});

db.connect(err => {
    if (err) console.error('Erro ao conectar ao MySQL:', err);
    else console.log('Conectado ao MySQL!');
});

export { db };