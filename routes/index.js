var express = require('express');
var request = require('superagent');
var router = express.Router();
var APIKey = 'AIzaSyBfod5sZm2Q7Qo_PcChsW72uL2XieXhaUM';

var navabiHomeURL = 'https://navabi.de';
var sheegoHomeURL = 'https://www.sheego.de';
var simplybeHomeURL = 'https://www.simplybe.co.uk';
var zalandoHomeURL = 'https://zalando.de';
var ullaHomeURL = 'https://www.ullapopken.de';

var navabiCategoryURL = 'https://navabi.de';
var sheegoCategoryURL = 'https://www.sheego.de';
var simplybeCategoryURL = 'https://www.simplybe.co.uk';
var zalandoCategoryURL = 'https://zalando.de';
var ullaCategoryURL = 'https://www.ullapopken.de';

var promiseRequest = function(url, strategy, label){
  return request
  .get('https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=' + url + '&strategy=' + strategy + '&key=' + APIKey)
  .set('Content-Type', 'application/json')
  .then(function(data) {
      return [data, label];
  });
}

var navabiHomeDesktopRequest = promiseRequest(navabiHomeURL, 'desktop', 'Navabi');
var sheegoHomeDesktopRequest = promiseRequest(sheegoHomeURL, 'desktop', 'Sheego');
var simplybeHomeDesktopRequest = promiseRequest(simplybeHomeURL, 'desktop', 'Simply Be');
var zalandoHomeDesktopRequest = promiseRequest(zalandoHomeURL, 'desktop', 'Zalando');
var ullaHomeDesktopRequest = promiseRequest(ullaHomeURL, 'desktop', 'Ulla');

var navabiCategoryDesktopRequest = promiseRequest(navabiCategoryURL, 'desktop', 'Navabi');
var sheegoCategoryDesktopRequest = promiseRequest(sheegoCategoryURL, 'desktop', 'Sheego');
var simplybeCategoryDesktopRequest = promiseRequest(simplybeCategoryURL, 'desktop', 'Simply Be');
var zalandoCategoryDesktopRequest = promiseRequest(zalandoCategoryURL, 'desktop', 'Zalando');
var ullaCategoryDesktopRequest = promiseRequest(ullaCategoryURL, 'desktop', 'Ulla');

var navabiHomeMobileRequest = promiseRequest(navabiHomeURL, 'mobile', 'Navabi');
var sheegoHomeMobileRequest = promiseRequest(sheegoHomeURL, 'mobile', 'Sheego');
var simplybeHomeMobileRequest = promiseRequest(simplybeHomeURL, 'mobile', 'Simply Be');
var zalandoHomeMobileRequest = promiseRequest(zalandoHomeURL, 'mobile', 'Zalando');
var ullaHomeMobileRequest = promiseRequest(ullaHomeURL, 'mobile', 'Ulla');

router.get('/', function(req, res, next) {
  Promise.all([
      navabiHomeDesktopRequest,
      sheegoHomeDesktopRequest,
      simplybeHomeDesktopRequest,
      zalandoHomeDesktopRequest,
      ullaHomeDesktopRequest,
      navabiCategoryDesktopRequest,
      sheegoCategoryDesktopRequest,
      simplybeCategoryDesktopRequest,
      zalandoCategoryDesktopRequest,
      ullaCategoryDesktopRequest
    ]).then(function(values){
      valuesHome =
      res.render('index', { title: 'Google PageSpeed Desktop', valuesHome: values.slice(0, 5), valuesCategory: values.slice(5, 10) });
  });
});

/* GET home page. */
router.get('/mobile', function(req, res, next) {
  Promise.all([
      navabiHomeMobileRequest,
      sheegoHomeMobileRequest,
      simplybeHomeMobileRequest,
      zalandoHomeMobileRequest,
      ullaHomeMobileRequest
    ]).then(function(values){
    res.render('index', { title: 'Google PageSpeed Mobile', values: values });
  });
});

module.exports = router;
