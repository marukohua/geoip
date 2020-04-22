var express = require('express');
var geoip = require('geoip-lite');

var router = express.Router();
var app = express();

/* GET ip address. */
router.get('/api', function(req, res, next) {
  try {
    var ip = req.query.ip;
    var geo = geoip.lookup(ip);
    var result = {
      "success" : (geo) ? true : false,
      "data" : (geo) ? geo : "{}"
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ "error": error.toString() });
  }
});

module.exports = router;
