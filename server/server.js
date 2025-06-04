import express from 'express'
import { db } from './connection.js'

const app = express()
app.use(express.json())

app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err);
            res.status(500).json({ erro: 'Erro ao buscar usuários' });
            return;
        }
        res.json(results);
    })
})

app.listen(3000)