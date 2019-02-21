var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Try doing POST over /tree-of-life/about or /tree-of-life/subtree');
});

module.exports = router;
