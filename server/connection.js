import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'ponto'
});

db.connect(err => {
    if (err) console.error('\x1b[32mErro ao conectar ao MySQL\x1b[0m:', err);
    else console.log('Conectado ao \x1b[34mMySQL\x1b[0m\n');
});

export { db };