const mongoose = require("mongoose");
const { Schema } = mongoose;

//Колонки таблиці
const generalSchema = new Schema({    
    comment: {
        type: Schema.Types.String,
        minLenght: 2,
    },
    ad: [{ type: Schema.Types.ObjectId,
        ref: 'Ads' }],
    user: [{ type: Schema.Types.ObjectId,
        ref: 'User' }],
});

//Назва таблиці
const model = mongoose.model('Comment', generalSchema);
module.exports = model;