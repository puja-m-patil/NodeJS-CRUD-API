const mongoose = require("mongoose");
const userSchema = require("../../models/model");
const postUserModel = mongoose.model("POST", userSchema);

module.exports = {
  readData: async (query) => {
    try {
      const readData_res = await postUserModel.find(query);
      return readData_res;
    } catch (err) {
      throw err;
    }
  },
};
