'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  oPrice: {
    type: Number,
    Required: 'Kindly enter the name of the task'
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
    type: String
  },
  form: {
    type: String
  },
  drug_form: {
    type: String
  },
  id: {
    type: Number,
    Required:"Enter the id it's required"
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

module.exports = mongoose.model('Products', ProductSchema);
