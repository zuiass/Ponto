const database = require('../connection.js');

// BUSCAR USUÁRIOS

function buscarUsuarios(callback) {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err);
            callback(err, null);
            return;
        }

        callback(null, results);
        console.log('Consulta realizada com sucesso:', results);
    });
}

module.exports = { buscarUsuarios };