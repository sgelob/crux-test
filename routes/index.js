var express = require('express');
var request = require('superagent');
var router = express.Router();
var APIKey = 'AIzaSyBfod5sZm2Q7Qo_PcChsW72uL2XieXhaUM';

var navabiHomeURL = 'https://navabi.de';
var sheegoHomeURL = 'https://www.sheego.de';
var simplybeHomeURL = 'https://www.simplybe.co.uk';
var zalandoHomeURL = 'https://zalando.de';
var ullaHomeURL = 'https://www.ullapopken.de';

var promiseRequest = function(url, label){
  return request
  .get('https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=' + url + '&key=' + APIKey)
  .set('Content-Type', 'application/json')
  .then(function(data) {
      return [data, label];
  });
}

var navabiHomeRequest = promiseRequest(navabiHomeURL, 'navabi');
var sheegoHomeRequest = promiseRequest(sheegoHomeURL, 'sheego');
var simplybeHomeRequest = promiseRequest(simplybeHomeURL, 'simplybe');
var zalandoHomeRequest = promiseRequest(zalandoHomeURL, 'zalando');
var ullaHomeRequest = promiseRequest(ullaHomeURL, 'ulla');


/* GET home page. */
router.get('/', function(req, res, next) {
  Promise.all([navabiHomeRequest, sheegoHomeRequest, simplybeHomeRequest, zalandoHomeRequest, ullaHomeRequest]).then(function(values){
    res.render('index', { title: 'Google PageSpeed', values: values });
  });
});

module.exports = router;
