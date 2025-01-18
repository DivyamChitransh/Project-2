const mongoose = require("mongoose");
const jobseekerModel = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    skills: [String],
    resume: String,
});

const jobseeker = mongoose.model('jobseeker',jobseekerModel);
module.exports = jobseeker;