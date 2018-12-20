const mongoose = require('mongoose');
const baseConfig = {
    discriminatorKey: "_type", //If you've got a lot of different data types, you could also consider setting up a secondary index here.
    collection: "alldata"   //Name of the Common Collection
};
const commonModel = mongoose.model('Common', new mongoose.Schema({}, baseConfig));


const SKU = commonModel.discriminator('SKU', new     mongoose.Schema({
    SKUName: String,
    description: String,
    type: String,
    items: [ { quantity: Number, modifier: Number, SKUName: String }]
}, baseConfig));





module.exports =  SKU;