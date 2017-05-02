'use strict';


var mongoose = require('mongoose'),
product = mongoose.model('store01Products');

exports.list_all_products = function(req, res) {
  product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.create_a_product = function(req, res) {
  process.stdout.write("\nInside function:"+ JSON.stringify(req.method));
  process.stdout.write("\nBody:"+ JSON.stringify(req.body));



  if (req.method === 'OPTIONS') {
        console.log('!OPTIONS');
        var headers = {};
        // IE8 does not allow domains to be specified, just the *
        // headers["Access-Control-Allow-Origin"] = req.headers.origin;
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
        res.writeHead(200, headers);
        res.end();
  } else {
    var new_product = new product(req.body);
    new_product.save(function(err, product) {
      process.stdout.write("\nError msg:"+err);
      if (err == 'null')
      {
        res.send(err);
      }
      res.json(product);
    });
  }


};


exports.read_a_product = function(req, res) {
product.findOne({ 'name': req.params.productName }, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.update_a_product = function(req, res) {
  product.findOneAndUpdate(req.params.productId, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.delete_a_product = function(req, res) {
  product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'product successfully deleted' });
  });
};
