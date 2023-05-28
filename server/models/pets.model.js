const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Pet Name required"],
        minLength: [3, "Must be at Least 3 characters long"],
    },
    type: { 
        type: String,
        required: [true, "Pet type required"],
        minLength: [3, "Pet type must be at least 3 characters long"],
    },
    description: { 
        type: String,
        required: [true, "Pet description required"],
        minLength: [3, "Pet description must be at least 3 characters long"],
    },
    skillOne: { 
        type: String,
},
    skillTwo: { 
        type: String,
},
    skillThree: { 
},
    age: {
        type: Number,
    },
// likes: {  // added but not used. will be used to contain likes between pages.
//     type: Number,
// },
//     array: { // added but not used. 
//         type: String,
//         // uniqueItems: true,
//         maxItems: [3, "max 3 items"]
// }

}, { timestamps: true }); 
module.exports = mongoose.model('Pets', PetsSchema);