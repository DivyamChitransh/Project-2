const mongoose = require('mongoose');
const jobApplicationmodel = new mongoose.Schema({
    jobID: {type: mongoose.Schema.Types.ObjectId,
        ref: 'jobPosting'
    },
    jobseekerID: {type: mongoose.Schema.Types.ObjectId,
    ref: 'jobseeker'
    },
    coverletter: {type: String},
    status: {type: String,
        enum: ['Accepted','Reviewing','Pending','Rejected'],
        default: 'Pending',
    },
}, {timestamps: true});

module.exports = mongoose.model('JobApplication',jobApplicationmodel);