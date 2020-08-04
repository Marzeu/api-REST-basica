const mongose = require('mongoose');

mongose.model('Produto', {
    nome: { type: 'string' },
    fabricante: { type: 'string' },
    preco: { type: 'number' },
});