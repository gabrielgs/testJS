var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var tvShowCtrl = require('./controllers/tvshows');
var port       = process.env.PORT || 3000;
var router     = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Conexion con la base de datos
mongoose.connect('mongodb://localhost/tvshows');

//Rutas
router.route('/tvshows')
  .post(tvShowCtrl.addTVShow)
  .get(tvShowCtrl.getTVShows);

router.route('/tvshows/:tvshow_id')
  .get(tvShowCtrl.getTVShowById)
  .put(tvShowCtrl.updateTVShow)
  .delete(tvShowCtrl.deleteTVShow);

//Registar las rutas
app.use('/api', router);

app.listen(port);
console.log('Server running' + ' ' + port);
