var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TVShowSchema = new Schema({
  titulo:      String,
  creador:     String,
  poster:      String,
  descripcion: String,
  temporadas:  Number,
  genero:      String
});

module.exports = mongoose.model('TVShow', TVShowSchema);
