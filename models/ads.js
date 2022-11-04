const mongoose = require("mongoose");
const { Schema } = mongoose;

//Колонки таблиці
const generalSchema = new Schema({    
    fill: {
        type: Schema.Types.String,
        minLenght: 2,
    }
});

//Назва таблиці
const model = mongoose.model('Ads', generalSchema);
module.exports = model;