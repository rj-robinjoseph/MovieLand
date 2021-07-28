const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{type:String, reqiured:true, unique:true},
    email:{type:String, reqiured:true, unique:true},
    password:{type:String, reqiured:true},
    profilePic:{type:String, default:""},
    isAdmin:{type:Boolean, default:false},
},{timestamps:true}
);

module.exports = mongoose.model("User", UserSchema);