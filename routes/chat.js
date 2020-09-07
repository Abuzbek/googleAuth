var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('chat', {title: "SALOM CHAT"})
});

module.exports = router;
