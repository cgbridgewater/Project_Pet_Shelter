const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title"],
        minLength: [3, "Title must be at Least 3 characters long"],
        maxLength: [50,"Title can not exceed 50 characters!"]
    },
    date: { 
        type: String,
        required: [true, "Date"],
        minLength: [3, "Type must be at least 3 characters long"],
    },
    description: { 
        type: String,
        required: [true, "Description"],
        minLength: [3, "Description must be at least 3 characters long"],
        maxLength: [300,"Description can not exceed 300 characters!"]
    },
    flierImage:{
        type:String,
        required:[true,"Flier Image Link"]
    },
}, { timestamps: true });  
module.exports = mongoose.model('Event', EventSchema);