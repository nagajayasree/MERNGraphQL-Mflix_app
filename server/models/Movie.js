const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  plot: {
    type: String,
  },
  poster: {
    type: String,
  },
  year: {
    type: Number,
  },
  type: {
    type: String,
  },
  genre: {
    type: String,
    enum: ['Comedy', 'Horror', 'Thriller', 'Romance', 'Crime', 'Action'],
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
