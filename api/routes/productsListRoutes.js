'use strict';
module.exports = function(app) {
  var productsList = require('../controllers/productsListController');
  var store01ProductsList = require('../controllers/store01ProductsController');


  // todoList Routes
  app.route('/products')
    .get(productsList.list_all_products)
    .post(productsList.create_a_product);
    // todoList Routes
  app.route('/store01/products')
    .get(store01ProductsList.list_all_products)
    .post(store01ProductsList.create_a_product);


  app.route('/product/:productName')
    .get(productsList.read_a_product)
    .put(productsList.update_a_product)
    .delete(productsList.delete_a_product);
  app.route('/store01/product/:productName')
    .get(store01ProductsList.read_a_product)
    .put(store01ProductsList.update_a_product)
    .delete(store01ProductsList.delete_a_product);
};
