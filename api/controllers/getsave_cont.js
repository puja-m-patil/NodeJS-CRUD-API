const mongoose = require("mongoose");
const userSchema = require("../../models/model");

const getUserModel = mongoose.model("GET", userSchema);

module.exports = {
  getSave: async (query) => {
    try {
      var requestedObject = new getUserModel();
      requestedObject.username = query.username;
      requestedObject.email = query.email;
      requestedObject.password = query.password;
      const getsave_res = await requestedObject.save();
      return getsave_res;
    } catch (err) {
      throw err;
    }
  },
};

// app.get("/getsave", (req, res) => {
//   //console.log(req);
//   var requestedObject = new getUserModel();
//   requestedObject.username = req.query.username;
//   requestedObject.email = req.query.email;
//   requestedObject.password = req.query.password;
//   requestedObject.save((err, success) => {
//     if (err) {
//       console.log(err);
//       res.send("Data couldn't be saved due to an internal error");
//     } else {
//       console.log("Your data has been saved succesfully");
//       res.send("Your data has been saved succesfully");
//     }
//   });
//   console.log(requestedObject);
//   //res.send("I got a request from you");
// });
