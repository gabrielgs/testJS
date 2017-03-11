var TVShow = require('../models/tvshow');

exports.addTVShow = function(req, res) {
  var tvshow = new TVShow();

  tvshow.titulo      = req.body.titulo;
  tvshow.creador     = req.body.creador;
  tvshow.poster      = req.body.poster;
  tvshow.descripcion = req.body.descripcion;
  tvshow.temporadas  = req.body.temporadas;
  tvshow.genero      = req.body.genero;

  tvshow.save(function(err) {
    if(err)
      res.send(err)

    res.json({ message: 'Tv Show Creado' });
  });
}

exports.getTVShows = function(req, res) {
  TVShow.find(function(err, tvshows) {
    if(err)
      res.send(err)

    res.json(tvshows);
  });
}

exports.getTVShowById = function(req, res) {
  TVShow.findById(req.params.tvshow_id, function(err, tvshow) {
    if(err)
      res.send(err);

    res.json(tvshow);
  });
}

exports.updateTVShow = function(req, res) {
  TVShow.findById(req.params.tvshow_id, function(err, tvshow) {
    if(err)
      res.send(err);

    tvshow.titulo      = req.body.titulo;
    tvshow.creador     = req.body.creador;
    tvshow.poster      = req.body.poster;
    tvshow.descripcion = req.body.descripcion;
    tvshow.temporadas  = req.body.temporadas;
    tvshow.genero      = req.body.genero;

    tvshow.save(function(err) {
      if(err)
        res.send(err)

      res.json({ message: 'Tv Show Actualizado' })
    });
  })
}

exports.deleteTVShow = function(req, res) {
  TVShow.remove({
    _id: req.params.tvshow_id
  }, function(err, tvshow) {
      if(err)
        res.send(err);

      res.json({ message: 'Tv Show Eliminado' });
  });
}