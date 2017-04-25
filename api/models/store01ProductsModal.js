'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Store01ProductSchema = new Schema({
  oPrice: {
    type: Number
  },
  is_banned: {
    type: Boolean
  },
  prescriptionRequired: {
    type: Boolean
  },
  pId: {
    type: Number
  },
  mrp: {
    type: Number
  },
  hkpDrugCode: {
    type: Number
  },
  label: {
    type: String
  },
  pForm: {
    type: String
  },
  uPrice: {
    type: Number
  },
  type: {
    type: String
  },
  uip: {
    type: String
  },
  packSize: {
    type: String
  },
  mfid: {
    type: Number
  },
  packForm: {
    type: String
  },
  generics: {
    type: String
  },
  name: {
    type: String,
    Required:"Enter the id it's required"
  },
  form: {
    type: String
  },
  drug_form: {
    type: String
  },
  id: {
    type: Number
  },
  packSizeLabel: {
    type: String
  },
  manufacturer: {
    type: String
  },
  pName: {
    type: String
  },
  imgUrl: {
    type: String
  }
});

module.exports = mongoose.model('store01Products', Store01ProductSchema);
