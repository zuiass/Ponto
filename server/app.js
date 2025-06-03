const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'ponto'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err);
            res.status(500).json({ erro: 'Erro ao buscar usuários' });
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor express rodando em: ${port}`);
});