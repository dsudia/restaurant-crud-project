var express = require('express');
var router = express.Router();

var restaurants = {
  1: {
    name: 'Los Tacos',
    cuisine: 'Mexican Cuisine',
    loc: 'Denver, CO',
    rating: 5,
    image: '/images/mexican.png'
  },
  2: {
    name: 'Burger Bar',
    cuisine: 'American Cuisine',
    loc: 'Seattle, WA',
    rating: 5,
    image: '/images/burger.png'
  },
  3: {
    name: 'Pasta Freddy\'s',
    cuisine: 'Italian Cuisine',
    loc: 'Sacramento, CA',
    rating: 3,
    image: '/images/italian.png'
  },
  4: {
    name: 'Bangkok Grill',
    cuisine: 'Thai Cuisine',
    loc: 'Brooklyn, NY',
    rating: 2,
    image: '/images/thai.jpg'
  },
  5: {
    name: 'Pho Mazing',
    cuisine: 'Vietnamese Cuisine',
    loc: 'Boulder, CO',
    rating: 2,
    image: '/images/pho.jpg'
  },
  6: {
    name: 'Fiestaritos',
    cuisine: 'Mexican Cuisine',
    loc: 'Lincoln, NE',
    rating: 1,
    image: '/images/mexican.png'
  }
};

var pages = {
  '/': {

  },


};

//render home page if no params or if param is restaurants
router.get('/:page?', function(req, res, next) {
  var page = req.params.page;
  if (!page || page === 'restaurants') {
    res.render('index', { title: 'Express' });
  }
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
