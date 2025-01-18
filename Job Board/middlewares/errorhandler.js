const errorhandler = (err,req,res,next) => {
    console.error(err.message);
    if(res.headersSent){
        return next(err);
    }
    res.status(err.status || 500).json({
        error:error.message
    });
}

module.exports = errorhandler;