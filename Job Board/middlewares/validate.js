const validatejobs = (req,res,next) => {
    const {title,description,companyName,location,salaryRange} = req.body;
    if(!title || !description || !companyName || !location || !salaryRange){
        return res.status(400).json({message: 'Validation failed'});
    }
    next();
};

const validateapplication = (req,res,next) => {
    const {jobId,jobseekerId,coverletter} = req.body;
    if(!jobId || !jobseekerId || !coverletter){
        return res.status(400).json({error: 'Cant proceed'});
    }
    next();
}

module.exports = {validatejobs,validateapplication};