const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();

app.use(bodyParser.json());

const fornecedores = require('../api/routes/fornecedores');
app.use('/api/fornecedores', fornecedores);

app.listen(config.get('api.port'), ()=>{
    console.log('Servidor escutando porta 3000');
})