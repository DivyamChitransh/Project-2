const mongoose = require('mongoose');
const employermodel = new mongoose.Schema({
    companyName: {type: String, required:true},
    email: {type: String,required:true,unique: true},
    mobile: {type:String},
    address: {type:String,required: true},
    skills: {type:String,required:true}
});

const Employer = mongoose.model('Employer',employermodel);
module.exports = Employer;