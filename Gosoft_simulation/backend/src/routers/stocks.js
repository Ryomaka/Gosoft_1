const express = require("express");
const {getStocks, postStocks} = require("../controllers/stocks");
const router = express.Router();


router.get("/7-11/:barcode", getStocks);
router.post("/7-11", postStocks);

module.exports = router;