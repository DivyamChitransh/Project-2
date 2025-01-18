const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');
const jobseekersrouter = require("./routes/jobseekersroutes.js");
const employerroutes = require('./routes/employerroutes.js');
const jobpostingrouter = require('./routes/jobsroutes');
const jobapplicationrouter = require('./routes/jobapplicationroutes.js');
const getAnalysisrouter = require('./routes/jobanalysisroutes.js');
const loggmiddleware = require('./middlewares/logging.js');
const {validatejobs,validateapplication} = require('./middlewares/validate.js');
const errorhandlerr = require('./middlewares/errorhandler.js');
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(loggmiddleware);
const URL = 'mongodb://localhost:27017/JobBoard';

const Database = async() => {
    try{
        await mongoose.connect(URL);
        console.log('Connected to database!');
    }
    catch(error){
        console.log('Error in connecting!');
    }
};
app.use('/jobseekers',jobseekersrouter);
app.use('/employers',employerroutes);
app.use('/jobs',jobpostingrouter)
app.use('/applications',jobapplicationrouter);
app.use('/analysis',getAnalysisrouter);

app.get('/',(req,res) => {;
    res.send('Job board is running')
})
app.use(errorhandlerr);

const PORT = 4040;
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
    Database();
})