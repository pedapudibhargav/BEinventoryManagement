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

  process.stdout.write("Inside function");
  var new_product = new product(req.body);
  process.stdout.write("hello: "+req.body.name);
  new_product.save(function(err, product) {

    process.stdout.write("Error msg:"+err);
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
