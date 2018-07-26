var express = require('express');
var fs = require('fs');
var request = require('superagent');
var router = express.Router();
var APIKey;

fs.readFile('./settings/api-key', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  APIKey = data;
});

var homeUrls = require('../settings/home-urls.js');
var categoryUrls = require('../settings/category-urls.js');
var productUrls = require('../settings/product-urls.js');

var promiseRequest = function(url, strategy, label){
  return request
  .get('https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=' + url + '&strategy=' + strategy + '&key=' + APIKey)
  .set('Content-Type', 'application/json')
  .then(function(data) {
      return [data, label];
  });
};

router.get('/', function(req, res, next) {
  var navabiHomeDesktopRequest = promiseRequest(homeUrls.first, 'desktop', 'Navabi');
  var sheegoHomeDesktopRequest = promiseRequest(homeUrls.second, 'desktop', 'Sheego');
  var simplybeHomeDesktopRequest = promiseRequest(homeUrls.third, 'desktop', 'Simply Be');
  var zalandoHomeDesktopRequest = promiseRequest(homeUrls.fourth, 'desktop', 'Zalando');
  var ullaHomeDesktopRequest = promiseRequest(homeUrls.fifth, 'desktop', 'Ulla');
  var navabiCategoryDesktopRequest = promiseRequest(categoryUrls.first, 'desktop', 'Navabi');
  var sheegoCategoryDesktopRequest = promiseRequest(categoryUrls.second, 'desktop', 'Sheego');
  var simplybeCategoryDesktopRequest = promiseRequest(categoryUrls.third, 'desktop', 'Simply Be');
  var zalandoCategoryDesktopRequest = promiseRequest(categoryUrls.fourth, 'desktop', 'Zalando');
  var ullaCategoryDesktopRequest = promiseRequest(categoryUrls.fifth, 'desktop', 'Ulla');
  var navabiProductDesktopRequest = promiseRequest(productUrls.first, 'desktop', 'Navabi');
  var sheegoProductDesktopRequest = promiseRequest(productUrls.second, 'desktop', 'Sheego');
  var simplybeProductDesktopRequest = promiseRequest(productUrls.third, 'desktop', 'Simply Be');
  var zalandoProductDesktopRequest = promiseRequest(productUrls.fourth, 'desktop', 'Zalando');
  var ullaProductDesktopRequest = promiseRequest(productUrls.fifth, 'desktop', 'Ulla');

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
      ullaCategoryDesktopRequest,
      navabiProductDesktopRequest,
      sheegoProductDesktopRequest,
      simplybeProductDesktopRequest,
      zalandoProductDesktopRequest,
      ullaProductDesktopRequest
    ]).then(function(values){
      var valuesHome = values.slice(0, 5);
      var valuesCategory = values.slice(5, 10);
      var valuesProduct = values.slice(10, 15);
      res.render('index', { 
        title: 'Google PageSpeed - Desktop', 
        valuesHome: valuesHome, 
        valuesCategory: valuesCategory, 
        valuesProduct: valuesProduct 
      });
  });
});

/* GET home page. */
router.get('/mobile', function(req, res, next) {
  var navabiHomeMobileRequest = promiseRequest(homeUrls.first, 'desktop', 'Navabi');
  var sheegoHomeMobileRequest = promiseRequest(homeUrls.second, 'desktop', 'Sheego');
  var simplybeHomeMobileRequest = promiseRequest(homeUrls.third, 'desktop', 'Simply Be');
  var zalandoHomeMobileRequest = promiseRequest(homeUrls.fourth, 'desktop', 'Zalando');
  var ullaHomeMobileRequest = promiseRequest(homeUrls.fifth, 'desktop', 'Ulla');
  var navabiCategoryMobileRequest = promiseRequest(categoryUrls.first, 'desktop', 'Navabi');
  var sheegoCategoryMobileRequest = promiseRequest(categoryUrls.second, 'desktop', 'Sheego');
  var simplybeCategoryMobileRequest = promiseRequest(categoryUrls.third, 'desktop', 'Simply Be');
  var zalandoCategoryMobileRequest = promiseRequest(categoryUrls.fourth, 'desktop', 'Zalando');
  var ullaCategoryMobileRequest = promiseRequest(categoryUrls.fifth, 'desktop', 'Ulla');
  var navabiProductMobileRequest = promiseRequest(productUrls.first, 'desktop', 'Navabi');
  var sheegoProductMobileRequest = promiseRequest(productUrls.second, 'desktop', 'Sheego');
  var simplybeProductMobileRequest = promiseRequest(productUrls.third, 'desktop', 'Simply Be');
  var zalandoProductMobileRequest = promiseRequest(productUrls.fourth, 'desktop', 'Zalando');
  var ullaProductMobileRequest = promiseRequest(productUrls.fifth, 'desktop', 'Ulla');

  Promise.all([
      navabiHomeMobileRequest,
      sheegoHomeMobileRequest,
      simplybeHomeMobileRequest,
      zalandoHomeMobileRequest,
      ullaHomeMobileRequest,
      navabiCategoryMobileRequest,
      sheegoCategoryMobileRequest,
      simplybeCategoryMobileRequest,
      zalandoCategoryMobileRequest,
      ullaCategoryMobileRequest,
      navabiProductMobileRequest,
      sheegoProductMobileRequest,
      simplybeProductMobileRequest,
      zalandoProductMobileRequest,
      ullaProductMobileRequest
    ]).then(function(values){
      var valuesHome = values.slice(0, 5);
      var valuesCategory = values.slice(5, 10);
      var valuesProduct = values.slice(10, 15);
      res.render('index', { 
        title: 'Google PageSpeed - Mobile', 
        valuesHome: valuesHome, 
        valuesCategory: valuesCategory, 
        valuesProduct: valuesProduct 
      });
  });
});

module.exports = router;
