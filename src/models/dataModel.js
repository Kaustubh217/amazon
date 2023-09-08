// models/dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  key: String,
  value: String,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
