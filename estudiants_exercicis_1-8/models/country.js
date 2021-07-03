const mongoose = require('mongoose');

const Schema = mongoose.Schema

const countrySchema = new Schema({
    name: String,
    flagURL: String,
    population: Number
});

exports.CountryModel = mongoose.model('country', countrySchema);