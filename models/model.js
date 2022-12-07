var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = userSchema;
