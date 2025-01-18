const express = require('express');
const {createApplicationcontroller,getjobseekerapplicationcontroller,getjobapplicationscontroller} = require('../controllers/jobApplicationcontroller.js');

const router = express.Router();
router.post('/',createApplicationcontroller);
router.get('/jobseeker/:jobseekerID',getjobseekerapplicationcontroller);
router.get('/job/:jobID',getjobapplicationscontroller);

module.exports = router;