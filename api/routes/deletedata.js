const express = require("express");
const deleteData_api = require("../controllers/deletedata_cont");
const router = express.Router();

router.put("/", async (req, res) => {
  console.log(req.query);
  const deleteres = await deleteData_api.deleteData(req.query);
  res.status(201).json({
    message: "Data Deleted succesfully",
    deleteres,
  });
  //res.status();
});
module.exports = router;
