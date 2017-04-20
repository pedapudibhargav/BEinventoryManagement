var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Products = require('./api/models/productsListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Inventorydb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/productsListRoutes');
routes(app);


app.listen(port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Inventory management list RESTful API server started on: ' + port);
