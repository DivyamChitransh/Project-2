const mongoose = require('mongoose');
const Jobsmodel = new mongoose.Schema({
    title: {type:String},
    description: {type:String},
    companyName: {type:String},
    location: {type: String},
    salaryRange:{type:String}
});

const jobPosting = mongoose.model('JobPosting',Jobsmodel);
module.exports = jobPosting;