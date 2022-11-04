const mongoose = require('mongoose');

//Створення нової бази books
const uri = 'mongodb://localhost:27017/ads';
const options = {
 //   useNewUrlParser: true,
 //  useUnifiedTopology: true,
};

//під'єднання до бази books
mongoose.connect(uri, options);

const db = mongoose.connection;
module.exports = db;