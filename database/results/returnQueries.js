const { buscarUsuarios } = require('../queries/users.js');
console.log('Iniciando a busca por usuários...');

buscarUsuarios((err, usuarios) => {
    console.log('Callback executada!');
    if (err) return console.error(err);
    console.log('Usuários encontrados:', usuarios);
});