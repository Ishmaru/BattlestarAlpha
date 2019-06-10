const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ScoreSchema = new Schema({
  name: {type: String, required: true, max: 6},
  score: {type: Number, required : true},
});

module.exports = mongoose.model('Score',ScoreSchema);
