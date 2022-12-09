const mongoose = require("mongoose");
const userSchema = require("../../models/model");
const postUserModel = mongoose.model("POST", userSchema);

module.exports = {
  postSave: async (body) => {
    try {
      var requestedObject = new postUserModel();
      requestedObject.username = body.username;
      requestedObject.email = body.email;
      requestedObject.password = body.password;
      const postSave_res = await requestedObject.save();
      return postSave_res;
    } catch (err) {
      throw err;
    }
  },
};
