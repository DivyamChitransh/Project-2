const jobApplicationModel = require('../models/jobApplicationmodel.js');
const JobPostingModele = require('../models/jobmodel.js');
const jobseekerModel = require('../models/jobseekersmodel.js');

const createApplicationcontroller = async(req,res) => {
    const {jobID,jobseekerID,coverletter} = req.body;
    try{
        const jobPostingavailable = await JobPostingModele.findById(jobID);
        const jobseekeravailable = await jobseekerModel.findById(jobseekerID);
        if(!jobPostingavailable){
            return res.status(404).json({error: 'No Job Posting available!'});
        }
        if(!jobseekeravailable){
            return res.status(404).json({error: 'No Job Seeker available!'});
        }
        const newApplication = new jobApplicationModel({jobID,jobseekerID,coverletter});
        await newApplication.save();
        res.status(201).json(newApplication);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};

const getjobseekerapplicationcontroller = async(req,res) => {
    const {jobseekerID} = req.params;
    try{
        const applications = await jobseekerModel.find({jobseekerID}).populate('jobID');
        res.status(200).json(applications);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const getjobapplicationscontroller = async(req,res) => {
    const {jobID} = req.params;
    try{
        const applications = await jobApplicationModel.find(jobID).populate('jobseekerID');
        res.status(200).json(applications);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {createApplicationcontroller,getjobseekerapplicationcontroller,getjobapplicationscontroller};
