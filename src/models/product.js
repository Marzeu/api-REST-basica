'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: { // tranforma um nome do tipo Cadeira Gamer = cadeira-gamer, deve ser unico, facilita na busca
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        require: true
    }],
    // image: {
    //     type: String,
    //     required: true,
    //     trim: true
    // }
});

module.exports = mongoose.model('Product', schema);