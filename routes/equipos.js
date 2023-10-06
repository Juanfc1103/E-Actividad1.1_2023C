var express = require('express');
var router = express.Router();
var EquiposController = require("../controllers/equipos.js");

/* GET equipos listing. */
router.get('/equipos', function(req, res, next) {
  res.send((EquiposController.getAll()));
});

router.post('/equipos', function(req, res, next) {
  const miembros = req.body.miembros;
  const categorias = req.body.categorias;
  const equipo = EquiposController.crear(miembros, categorias);
  res.json(equipo);
});

module.exports = router;
