const db  = require('../connection/connection.js');

// C O N S U L T A S

async function buscarPessoas() {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
}

module.exports = { buscarPessoas };