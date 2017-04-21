'use strict';


var mongoose = require('mongoose'),
store01Product = mongoose.model('store01ProductsModal');

exports.list_all_products = function(req, res) {
store01Product.find({}, function(err, product) {
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
store01Product.findOne({ 'name': req.params.productName }, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.update_a_product = function(req, res) {
store01Product.findOneAndUpdate(req.params.productId, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.delete_a_product = function(req, res) {


store01Product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'store product successfully deleted' });
  });
};
