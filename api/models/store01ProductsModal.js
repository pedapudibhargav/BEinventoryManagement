'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Store01ProductSchema = new Schema({
  name: {
    type: String,
    Required:"Enter the id it's required"
  },
  manufacturer: {
    type: String
  },
  minStockValue:{
    type:Number
  },
  drug_form: {
    type: String
  },
  imgUrl: {
    type: String
  },
  prescriptionRequired: {
    type: Boolean
  },
  is_banned: {
    type: Boolean
  },
  tags:{
    type: Array
  },
  packForm:{
    type: String
  },
  inStockCount:{
    type: Number
  }
});

module.exports = mongoose.model('store01Products', Store01ProductSchema);
