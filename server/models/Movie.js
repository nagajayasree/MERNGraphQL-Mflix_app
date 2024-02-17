const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  plot: {
    type: String,
  },
  year: {
    type: Number,
  },
  type: {
    type: String,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
