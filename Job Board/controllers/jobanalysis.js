const jobApplicationModel = require('../models/jobApplicationmodel.js');
const jobPostingModel = require('../models/jobmodel.js');
const jobseekerModel = require('../models/jobseekersmodel.js');
const getanalysis = async(req,res,next) => {
    try{
        const mostappliedjob = await jobApplicationModel.aggregate([
            {$group: {_id: '$jobID',count: {$sum:1}}},
            {$limit:5},
            {$lookup : {
                from: 'jobpostings',
                localField: '_id',
                foreignField: '_id',
                as: 'jobDetails'
            }},
            {$unwind: '$jobDetails'},
            {$project: {jobTitle: '$jobDetails.title',
                companyName: '$jobDetails.companyName',
                count:1
            }}
        ]);
        const jobseekerAnalysis = await jobApplicationModel.aggregate([
            {$group : {_id: '$jobseekerID'}},
            {
            $lookup: {
                from: 'jobseekers',
                localField: '_id',
                foreignField: '_id',
                as: 'seekdetails'
            }
        },
        {$unwind: '$seekdetails'},
        {
            $project: {
                seekerName: '$seekdeatils.name'
            }
        }
        ]);
        res.status(200).json({mostappliedjob,jobseekerAnalysis});
    }
    catch(error){
        next(error);
    }
}

module.exports = {getanalysis};