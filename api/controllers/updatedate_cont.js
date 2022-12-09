const mongoose = require("mongoose");
const userSchema = require("../../models/model");
const getUserModel = mongoose.model("GET", userSchema);

module.exports = {
  updateData: async (query, body) => {
    try {
      const update_res = await getUserModel.update(query, { $set: body });
      return update_res;
    } catch (err) {
      throw err;
    }
  },
};

//app.put("/updatedata", (req, res) => {
//   console.log(req.query);
//   postUserModel.update(req.query, { $set: req.body }, (err, success) => {
//     if (err) {
//       req.send(err);
//     } else {
//       res.send("Data updated successfully");
//     }
//   });
// });
