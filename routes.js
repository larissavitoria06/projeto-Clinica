const express = require('express');
const routes = express.Router();

const Consulta = require('./controllers/consulta');

routes.get('/', (req, res) => {
    res.json({ titulo: 'Clínica Bem Estar'});
});

routes.post('/consultas', Consulta.create);
routes.get('/consultas', Consulta.read);

module.exports = routes;