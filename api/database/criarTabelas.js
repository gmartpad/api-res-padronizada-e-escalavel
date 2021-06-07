const ModeloTabela = require('../routes/fornecedores/ModeloTabelaFornecedor');

ModeloTabela
    .sync()
    .then(() => console.log('Tabela Criada com Sucesso!'))
    .catch(erro => console.log(erro));