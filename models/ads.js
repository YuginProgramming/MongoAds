const mongoose = require("mongoose");
const { Schema } = mongoose;

//Колонки таблиці
const generalSchema = new Schema({    
    fill: {
        type: Schema.Types.String,
        minLenght: 2,
    },
    user: [{ type: Schema.Types.ObjectId,
        ref: 'User' }],
});

//Назва таблиці
const model = mongoose.model('Ads', generalSchema);
module.exports = model;