const morgan = require('morgan');
const logmiddleware = morgan('dev');
module.exports = logmiddleware;