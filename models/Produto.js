const mongose = require('mongoose');

mongose.model('Produto', {
    nome: { type: 'string' },
    fabrincate: { type: 'string' },
    preco: { type: 'number' },
});