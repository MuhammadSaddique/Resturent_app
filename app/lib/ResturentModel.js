const mongoose = require("mongoose");

const ResturentModel = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    city:String,
    address:String,
    contact:String
})
const ResturentSchema = mongoose.models.Resturent || mongoose.model("Resturent",ResturentModel);

module.exports = ResturentSchema;
