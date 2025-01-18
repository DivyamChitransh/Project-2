const express = require('express');
const router = express.Router();
const {getanalysis} = require('../controllers/jobanalysis.js');
router.get('/',getanalysis);
module.exports = router;