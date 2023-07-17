const mongoose = require("mongoose");

const User = mongoose.Schema({
  username: {type:String , required : true},
  password : {type:String , required: true},
  tasks :[{type:String}  ]
},{
    timestamps : true
});

module.exports = mongoose.model("users" , User)