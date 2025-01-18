const express = require('express');
const {createemployercontroller,getEmployerbyIDcontroller,updateemployercontroller,deleteemployercontroller} = require('../controllers/employercontroller');
const router = express.Router();
router.post('/',createemployercontroller);
router.get('/:id',getEmployerbyIDcontroller);
router.put('/:id',updateemployercontroller);
router.delete('/:id',deleteemployercontroller);
module.exports = router;