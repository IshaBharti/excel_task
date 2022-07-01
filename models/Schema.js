var mongoose = require("mongoose");
var { Schema } = mongoose;
var user = {
  firstName: String,
  lastName: String,
  city: String,
  salary: String,
};
var User = mongoose.model("User", user);
module.exports = User;
