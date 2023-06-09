const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Pet Name"],
        minLength: [3, "Name must be at Least 3 characters long"],
        maxLength: [50,"Name can not exceed 50 characters!"]
    },
    type: { 
        type: String,
        required: [true, "Pet Type"],
        minLength: [3, "Type must be at least 3 characters long"],
    },
    description: { 
        type: String,
        required: [true, "Description"],
        minLength: [3, "Description must be at least 3 characters long"],
        maxLength: [300,"Description can not exceed 300 characters!"]
    },
    age: {
        type:Number,
        required:[true,"Pet Age"],
        min:[1,"Age must be at least 1!"],
        validate:{
            validator:Number.isInteger,
            message:"Age must be a whole number!"
        }
    },
    petImage:{
        type:String,
        required:[true,"Image Link"]
    },
    animalFriendly:{
        type:Boolean,
        default:false,
    },
    childFriendly:{
        type:Boolean,
        default:false,
    },
    fixed:{
        type:Boolean,
        default:false,
    },
    notes: { 
        type: String,
    },
}, { timestamps: true });
module.exports = mongoose.model('Pets', PetsSchema);