var express = require("express");
var fs = require("fs");
var request = require("superagent");
var router = express.Router();
var APIKey;

fs.readFile("./settings/api-key", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  APIKey = data;
});

var siteNames = require("../settings/site-names.js");
var homeUrls = require("../settings/home-urls.js");
var categoryUrls = require("../settings/category-urls.js");
var productUrls = require("../settings/product-urls.js");

var promiseRequest = function(url, strategy, label) {
  return request
    .get("https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=" + url + "&strategy=" + strategy + "&key=" + APIKey)
    .set("Content-Type", "application/json")
    .then(function(data) {
      return [data, label];
    });
};

router.get("/desktop", function(req, res, next) {
  var d = "desktop";
  var firstHomeDesktopRequest = promiseRequest(homeUrls.first, d, siteNames.first);
  var secondHomeDesktopRequest = promiseRequest(homeUrls.second, d, siteNames.second);
  var thirdHomeDesktopRequest = promiseRequest(homeUrls.third, d, siteNames.third);
  var fourthHomeDesktopRequest = promiseRequest(homeUrls.fourth, d, siteNames.fourth);
  var firstCategoryDesktopRequest = promiseRequest(categoryUrls.first, d, siteNames.first);
  var secondCategoryDesktopRequest = promiseRequest(categoryUrls.second, d, siteNames.second);
  var thirdCategoryDesktopRequest = promiseRequest(categoryUrls.third, d, siteNames.third);
  var fourthCategoryDesktopRequest = promiseRequest(categoryUrls.fourth, d, siteNames.fourth);
  var firstProductDesktopRequest = promiseRequest(productUrls.first, d, siteNames.first);
  var secondProductDesktopRequest = promiseRequest(productUrls.second, d, siteNames.second);
  var thirdProductDesktopRequest = promiseRequest(productUrls.third, d, siteNames.third);
  var fourthProductDesktopRequest = promiseRequest(productUrls.fourth, d, siteNames.fourth);

  Promise.all([
    firstHomeDesktopRequest,
    secondHomeDesktopRequest,
    thirdHomeDesktopRequest,
    fourthHomeDesktopRequest,
    firstCategoryDesktopRequest,
    secondCategoryDesktopRequest,
    thirdCategoryDesktopRequest,
    fourthCategoryDesktopRequest,
    firstProductDesktopRequest,
    secondProductDesktopRequest,
    thirdProductDesktopRequest,
    fourthProductDesktopRequest
  ]).then(function(values) {
    var valuesHome = values.slice(0, 4);
    var valuesCategory = values.slice(4, 8);
    var valuesProduct = values.slice(8, 12);
    res.render("index", {
      title: "Google PageSpeed - Desktop",
      valuesHome: valuesHome,
      valuesCategory: valuesCategory,
      valuesProduct: valuesProduct
    });
  });
});

/* GET home page. */
router.get("/", function(req, res, next) {
  var m = "mobile";
  var firstHomeMobileRequest = promiseRequest(homeUrls.first, m, siteNames.first);
  var secondHomeMobileRequest = promiseRequest(homeUrls.second, m, siteNames.second);
  var thirdHomeMobileRequest = promiseRequest(homeUrls.third, m, siteNames.third);
  var fourthHomeMobileRequest = promiseRequest(homeUrls.fourth, m, siteNames.fourth);
  var firstCategoryMobileRequest = promiseRequest(categoryUrls.first, m, siteNames.first);
  var secondCategoryMobileRequest = promiseRequest(categoryUrls.second, m, siteNames.second);
  var thirdCategoryMobileRequest = promiseRequest(categoryUrls.third, m, siteNames.third);
  var fourthCategoryMobileRequest = promiseRequest(categoryUrls.fourth, m, siteNames.fourth);
  var firstProductMobileRequest = promiseRequest(productUrls.first, m, siteNames.first);
  var secondProductMobileRequest = promiseRequest(productUrls.second, m, siteNames.second);
  var thirdProductMobileRequest = promiseRequest(productUrls.third, m, siteNames.third);
  var fourthProductMobileRequest = promiseRequest(productUrls.fourth, m, siteNames.fourth);

  Promise.all([
    firstHomeMobileRequest,
    secondHomeMobileRequest,
    thirdHomeMobileRequest,
    fourthHomeMobileRequest,
    firstCategoryMobileRequest,
    secondCategoryMobileRequest,
    thirdCategoryMobileRequest,
    fourthCategoryMobileRequest,
    firstProductMobileRequest,
    secondProductMobileRequest,
    thirdProductMobileRequest,
    fourthProductMobileRequest
  ]).then(function(values) {
    var valuesHome = values.slice(0, 4);
    var valuesCategory = values.slice(4, 8);
    var valuesProduct = values.slice(8, 12);
    res.render("index", {
      title: "Google PageSpeed - Mobile",
      valuesHome: valuesHome,
      valuesCategory: valuesCategory,
      valuesProduct: valuesProduct
    });
  });
});

module.exports = router;
