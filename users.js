const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    reg_name:String,
    map_data:String,
    charts_data:String
})

module.exports =mongoose.model("users",userSchema);