var userSchema = require("./models/model");
var express = require("express");
var bodyparser = require("body-parser");
var app = express(); //root object as per documentation
var mongoose = require("mongoose");
const { query } = require("express");
const { runInNewContext } = require("vm");

app.use(bodyparser.json());
// let getUserModel = mongoose.model("GET", userSchema);
// let postUserModel = mongoose.model("POST", userSchema);

//Routes
const deleteRoutes = require("./api/routes/deletedata");
const getSaveRoutes = require("./api/routes/getsave");
const postSaveRoutes = require("./api/routes/postsave");
const updateRoutes = require("./api/routes/updatedata");
const readDataRoutes = require("./api/routes/readdata");

//Mongo DB Connection
mongoose.connect("mongodb://localhost:27017/random", {}, (error, success) => {
  if (error) {
    throw error;
  } else {
    console.log("mongodb connected succesfully");
  }
});

app.use("/deletedata", deleteRoutes);
app.use("/getsave", getSaveRoutes);
app.use("/postsave", postSaveRoutes);
app.use("/updatedata", updateRoutes);
app.use("/readdata", readDataRoutes);

app.listen(3000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("App is running on port 3000 and ready to listen to client");
  }
});

//Creating new Objects
// let getUserModel = mongoose.model("GET", userSchema);
// let postUserModel = mongoose.model("POST", userSchema);

//endpoint basic

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

// app.post("/postsave", (req, res) => {
//   console.log(req);
//   var requestedObject = new postUserModel();
//   requestedObject.username = req.body.username;
//   requestedObject.email = req.body.email;
//   requestedObject.password = req.body.password;
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

//   //res.send("I got the request from the client via POST method");
// });

// app.get("/readdata", (req, res) => {
//   getUserModel.find(req.query, (err, collections) => {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log(req.query);
//       res.send(collections);
//     }
//   });
// });

// app.put("/updatedata", (req, res) => {
//   console.log(req.query);
//   postUserModel.update(req.query, { $set: req.body }, (err, success) => {
//     if (err) {
//       req.send(err);
//     } else {
//       res.send("Data updated successfully");
//     }
//   });
// });