const express = require('express');
const request = require('request')
var router = express.Router();

var path = require('path');
var HOMEDIR  = path.join(__dirname, '..');
var COMMONDIR  = path.join(HOMEDIR, "common");

var constants = require(path.join(COMMONDIR, 'constants'));

router.get('/', function(req, res, next) {
  res.send('Try doing POST over /about or /subtree');
});

router.post('/about', function(req, res, next) {
  request.post(constants.TREE_OF_LIFE_API_ABOUT_URL, {
    json: req.body
  }, (error, apiResp, body) => {
    if (error) {
      console.error(error)
      res.send(error);
    }
    console.log(`statusCode: ${apiResp.statusCode}`)
    res.send(body);
  })
});

router.post('/subtree', function(req, res, next) {
  request.post(constants.TREE_OF_LIFE_API_SURTREE_URL, {
    json: req.body
  }, (error, apiResp, body) => {
    if (error) {
      console.error(error)
      res.send(error);
    }
    console.log(`statusCode: ${apiResp.statusCode}`)
    res.send(body);
  })
});

module.exports = router;
