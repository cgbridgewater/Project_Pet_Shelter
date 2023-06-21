const mongoose = require('mongoose');

const AdoptSchema = new mongoose.Schema({
    petName: { 
        type: String,
    },
    petId: { 
        type: String,
    },
    userName: { 
        type: String,
        required: [true, "Name required"],
        minLength: [3, "Name must be at least 3 characters long"],
        maxLength: [300,"Name can not exceed 300 characters!"]
    },
    phone: {
        type:Number,
        required:[true,"Valid phone number required!"]
    },
    email:{
        type:String,
        required:[true,"Valid email required!"]
    },
    petImage:{
        type:String,
        required:[true,"Image Link"]
    }
}, { timestamps: true }); 
module.exports = mongoose.model('Adopt', AdoptSchema);