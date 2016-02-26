var express = require('express');
var router = express.Router();
var pages = require('./pages');
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/gTables';


// render restaurant edit page of identified restaurant OR
// render restaurant new page if new is called OR
// render Show page of identified restaurant OR
// render home page if no params are passed or restaurant is the first param
router.get('/:page?', function(req, res, next) {
  var page = req.params.page;
  var responseArray = [];
  if (!page) {
    pg.connect(connectionString, function(err, client, done) {

      if(err) {
        console.log(err);
        done();
        return res.status(500).json({status: 'error',message: 'Something didn\'t work'});
      }

      var query = client.query('select * from restaurants');
      console.log(query);
      query.on('row', function(row) {
        responseArray.push(row);
      });

      query.on('end', function() {
        res.render('index', {restaurants: responseArray});
        done();
      });
       pg.end();
    });
  } else if (page === 'restaurants') {
    res.redirect('/');
  }
});

router.get('/restaurants/:id/edit', function(req, res, next) {
  var id = req.params.id;
  var responseArray = [];
  pg.connect(connectionString, function(err, client, done) {

    if(err) {
      console.log(err);
      done();
      return res.status(500).json({status: 'error',message: 'Something didn\'t work'});
    }

    var query = client.query('select * from restaurants where id=' + id);
    query.on('row', function(row) {
      responseArray.push(row);
    });

    query.on('end', function() {
      console.log(responseArray);
      res.render('edit', {restaurants: responseArray[0]});
      done();
    });
     pg.end();
  });
});

router.get('/restaurants/new', function(req, res, next) {
  res.render('new', pages['new']);
});

router.get('/restaurants/:id', function(req, res, next) {
  var restId = req.params.id;
  var thisRestaurant;
  for (var i = 0; i < restaurantNames.length; i++ ) {
    if (restId === restaurantNames[i]) {
      thisRestaurant = restaurantNames[i];
    }
  }
  if (thisRestaurant) {
    res.render('show', restaurants[thisRestaurant]);
  }
  else {
    res.render('error');
  }
});

module.exports = router;
