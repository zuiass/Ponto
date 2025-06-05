import express from 'express'
import { db } from './connection.js'

const app = express()
app.use(express.json())
app.use(express.static('../scr/pages'));

const usuarios = [];

app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err)
            return res.status(500).json({ erro: 'Erro ao buscar usuários' })
        }

        usuarios.push(...results)
        console.log(usuarios)

        res.json(results)
    })
})

app.listen(3000, () => {
    console.log('\nServidor rodando em', '\x1b[32mhttp://localhost:3000\x1b[0m')
})