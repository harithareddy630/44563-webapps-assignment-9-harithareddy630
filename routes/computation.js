var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
          // Build a fake url to get the search parameters using an URL object
          fake_url = "https://fake.com/path" + req.url
          const url = new URL(fake_url)
          const search_params = url.searchParams
          var x = Math.random();
          if (search_params.get("x")) {
            x= search_params.get("x");}
    var l = Math.pow(x,x);
    var m = Math.sign(x);
    var n = Math.tanh(x); 
    var o = Math.trunc(x); 
  res.render('computation', { title: 'Express',x:x,l:l,m:m,n:n,o:o});
  
});

module.exports = router;  