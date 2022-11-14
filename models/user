const mongoose = require("mongoose");
const { Schema } = mongoose;

//Колонки таблиці
const generalSchema = new Schema({    
    name: {
        type: Schema.Types.String,
        minLenght: 2,
    }
});

//Назва таблиці
const modelUser = mongoose.model('User', generalSchema);
module.exports = modelUser;