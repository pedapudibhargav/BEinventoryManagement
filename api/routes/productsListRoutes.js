'use strict';
module.exports = function(app) {
  var productsList = require('../controllers/productsListController');


  // todoList Routes
  app.route('/products')
    .get(productsList.list_all_products)
    .post(productsList.create_a_product);


  app.route('/tasks/:taskId')
    .get(productsList.read_a_product)
    .put(productsList.update_a_product)
    .delete(productsList.delete_a_product);
};
