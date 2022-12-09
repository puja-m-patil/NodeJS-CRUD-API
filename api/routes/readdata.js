const express = require("express");
const readData_api = require("../controllers/readdata_cont");
const router = express.Router();
var bodyparser = require("body-parser");

router.use(bodyparser.json());

router.get("/", async (req, res) => {
  console.log(req.query);
  const readData_res = await readData_api.readData(req.query);
  res.status(201).json({
    message: "Data Output",
    readData_res,
  });
});

module.exports = router;
