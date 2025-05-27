const db  = require('../connection/connection.js');

/**
* @returns {Promise<Array<{ id: number, nome: string, email: string, pontuacao: number }>>}
*/

// C O N S U L T A S

async function buscarPessoas() {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
}

module.exports = { buscarPessoas };