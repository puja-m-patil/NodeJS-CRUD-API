const express = require("express");
const getSave_api = require("../controllers/getsave_cont");
const router = express.Router();
var bodyparser = require("body-parser");

router.use(bodyparser.json());

router.get("/", async (req, res) => {
  console.log(req.query);
  const getSave_res = await getSave_api.getSave(req.query);
  res.status(201).json({
    message: "Data Saved succesfully",
    getSave_res,
  });
});

module.exports = router;
