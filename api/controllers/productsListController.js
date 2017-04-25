'use strict';


var mongoose = require('mongoose'),
  product = mongoose.model('Products');

exports.list_all_products = function(req, res) {
  product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};




exports.create_a_product = function(req, res) {
  var new_product = new product(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.read_a_product = function(req, res) {
product.findOne({ 'name': req.params.productName }, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.product_auto_suggestion = function(req, res) {

  process.stdout.write("Rquested String: "+req.params.productName);
  var regexReq = "^.*acc";
  var regexObj = new RegExp(regexReq, 'i');
  product.find({
    name:{$regex : regexObj  }
  }
  , function(err, product) {
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
