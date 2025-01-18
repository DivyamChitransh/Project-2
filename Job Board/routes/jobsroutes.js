const express = require('express');
const {createjobscontroller,getjobscontroller,updatejobpostingcontroller,deletejobpostingcontroller,getAlljobs} = require('../controllers/jobcontroller.js');
const router = express.Router();
router.post('/',createjobscontroller);
router.get('/',getAlljobs);
router.get('/:id',getjobscontroller);
router.put('/:id',updatejobpostingcontroller);
router.delete('/:id',deletejobpostingcontroller);
module.exports = router;