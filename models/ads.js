const mongoose = require("mongoose");
const { Schema } = mongoose;

//Колонки таблиці
const generalSchema = new Schema({    
    title: {
        type: Schema.Types.String,
        minLenght: 2,
    },
    fill: {
        type: Schema.Types.String,
        minLenght: 2,
    },
    comment: [{ type: Schema.Types.ObjectId,
        ref: 'Commentt'}],
    user: [{ type: Schema.Types.ObjectId,
        ref: 'User' }],
});

//Назва таблиці
const model = mongoose.model('Ads', generalSchema);
module.exports = model;