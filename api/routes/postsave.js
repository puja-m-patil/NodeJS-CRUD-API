const express = require("express");
const postSave_api = require("../controllers/postsave_cont");
const router = express.Router();
var bodyparser = require("body-parser");

router.use(bodyparser.json());

router.post("/", async (req, res) => {
  console.log(req.body);
  const postSave_res = await postSave_api.postSave(req.body);
  res.status(201).json({
    message: "Data Saved succesfully",
    postSave_res,
  });
});

module.exports = router;
