var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user', { nameH: 'name', namep: ':test', alderH: 'alder', alderp: ':18', emailH: 'email', emailp: ':test@@q' });
});

module.exports = router;
