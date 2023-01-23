var express = require('express');
var world = require('../public/javascripts/world.js');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('world', { worldkey: world });
});

module.exports = router;
