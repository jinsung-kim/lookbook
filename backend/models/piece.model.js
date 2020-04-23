const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pieceSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  size: { type: String, required: true },
  link: { type: String, required: true },
  imgLink: { type: String, required: true },
  type: { type: String, required: true },
  tags: { type: Array, required: true },
}, {
  timestamps: true,
});

const Piece = mongoose.model('Piece', pieceSchema);

module.exports = Piece;