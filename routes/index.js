var express = require('express');
var request = require('superagent');
var router = express.Router();
var APIKey = 'AIzaSyBfod5sZm2Q7Qo_PcChsW72uL2XieXhaUM';

var navabiHomeURL = 'https://navabi.de';
var sheegoHomeURL = 'https://www.sheego.de';
var simplybeHomeURL = 'https://www.simplybe.co.uk';
var zalandoHomeURL = 'https://zalando.de';
var ullaHomeURL = 'https://www.ullapopken.de';

var navabiCategoryURL = 'https://www.navabi.de/damenmode/kleider/';
var sheegoCategoryURL = 'https://www.sheego.de/damenmode/kleider/';
var simplybeCategoryURL = 'https://www.simplybe.co.uk/shop/dresses/fashion/1/_/N-1ytvjol/products/show.action?type=cmr&hnid=11148613&cm_sp=DAL-Clothing-_-ShopByCategory-_-Dresses';
var zalandoCategoryURL = 'https://www.zalando.de/damenbekleidung-kleider/';
var ullaCategoryURL = 'https://www.ullapopken.de/Damenmode/kleider/';

var navabiProductURL = 'https://www.navabi.de/product/strickcardigan-46754/?colorcode=0205';
var sheegoProductURL = 'https://www.sheego.de/jerseykleid-im-materialmix_130054.html?color=00018';
var simplybeProductURL = 'https://www.simplybe.co.uk/shop/soft-tencel-denim-double-layer-maxi-dress-with-side-splits/hq070/product/details/show.action?pdBoUid=7205#colour:,size:';
var zalandoProductURL = 'https://www.zalando.de/violeta-by-mango-topetti-freizeitkleid-black-vm421c0cl-q11.html';
var ullaProductURL = 'https://www.ullapopken.de/modell/kleid-punktmuster-a-linie-34-volantaermel/716637/?color=71663710&p=1&c=updobdresses&s=&g=UP_DAMEN&query=%2Fapi%2Fres%2Fcategory%2Farticles%2Flanguage%2Fde%2Fsize%2F60%2Fpage%2F1%2Fcategory%2Fup_updobdresses%2Fgrouping%2FUP_DAMEN%2Ffilter%2F_%2Fsort%2Fnormal%2Ffs%2F9999&back=https%3A%2F%2Fwww.ullapopken.de%2FDamenmode%2Fkleider%2F%3Fscroll%3D716637&pos=1&origPos=1&page=1&origPageSize=60&color=71663710';

var promiseRequest = function(url, strategy, label){
  return request
  .get('https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=' + url + '&strategy=' + strategy + '&key=' + APIKey)
  .set('Content-Type', 'application/json')
  .then(function(data) {
      return [data, label];
  });
};

router.get('/', function(req, res, next) {
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
  var navabiProductDesktopRequest = promiseRequest(navabiProductURL, 'desktop', 'Navabi');
  var sheegoProductDesktopRequest = promiseRequest(sheegoProductURL, 'desktop', 'Sheego');
  var simplybeProductDesktopRequest = promiseRequest(simplybeProductURL, 'desktop', 'Simply Be');
  var zalandoProductDesktopRequest = promiseRequest(zalandoProductURL, 'desktop', 'Zalando');
  var ullaProductDesktopRequest = promiseRequest(ullaProductURL, 'desktop', 'Ulla');

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
      }).catch(error => {
        console.log(error);
      });
  });
});

/* GET home page. */
router.get('/mobile', function(req, res, next) {
  var navabiHomeMobileRequest = promiseRequest(navabiHomeURL, 'mobile', 'Navabi');
  var sheegoHomeMobileRequest = promiseRequest(sheegoHomeURL, 'mobile', 'Sheego');
  var simplybeHomeMobileRequest = promiseRequest(simplybeHomeURL, 'mobile', 'Simply Be');
  var zalandoHomeMobileRequest = promiseRequest(zalandoHomeURL, 'mobile', 'Zalando');
  var ullaHomeMobileRequest = promiseRequest(ullaHomeURL, 'mobile', 'Ulla');
  var navabiCategoryMobileRequest = promiseRequest(navabiCategoryURL, 'mobile', 'Navabi');
  var sheegoCategoryMobileRequest = promiseRequest(sheegoCategoryURL, 'mobile', 'Sheego');
  var simplybeCategoryMobileRequest = promiseRequest(simplybeCategoryURL, 'mobile', 'Simply Be');
  var zalandoCategoryMobileRequest = promiseRequest(zalandoCategoryURL, 'mobile', 'Zalando');
  var ullaCategoryMobileRequest = promiseRequest(ullaCategoryURL, 'mobile', 'Ulla');
  var navabiProductMobileRequest = promiseRequest(navabiProductURL, 'mobile', 'Navabi');
  var sheegoProductMobileRequest = promiseRequest(sheegoProductURL, 'mobile', 'Sheego');
  var simplybeProductMobileRequest = promiseRequest(simplybeProductURL, 'mobile', 'Simply Be');
  var zalandoProductMobileRequest = promiseRequest(zalandoProductURL, 'mobile', 'Zalando');
  var ullaProductMobileRequest = promiseRequest(ullaProductURL, 'mobile', 'Ulla');

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
      }).catch(error => {
        console.log(error);
      });
  });
});

module.exports = router;
