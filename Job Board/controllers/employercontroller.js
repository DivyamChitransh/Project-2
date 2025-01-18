const Employer = require('../models/employersmodel.js')
const createemployercontroller = async(req,res) => {
    const {companyName,email,mobile,address,skills} = req.body;
    const newEmployer = new Employer({
        companyName,email,mobile,address,skills
    });
    try{
        await newEmployer.save();
        res.status(201).json(newEmployer);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
};

const getEmployerbyIDcontroller = async(req,res) => {
    const {id} = req.params;
    try{
        const employer = await Employer.findById(id);
        res.status(200).json(employer);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};

const updateemployercontroller = async(req,res) => {
    const {id} = req.params;
    const {companyName,email,mobile,address,skills} = req.body;
    try{
        const updateemployer = await Employer.findByIdAndUpdate(
            id, {companyName,email,mobile,address,skills},{new:true}
        );
        res.status(200).json(updateemployer);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};

const deleteemployercontroller = async(req,res) => {
    const {id} = req.params;
    try{
        const deleteemployer = await Employer.findByIdAndDelete(id);
        res.status(200).json({message: 'Employer has been deleted!'});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};

module.exports = {createemployercontroller,getEmployerbyIDcontroller,updateemployercontroller,deleteemployercontroller}