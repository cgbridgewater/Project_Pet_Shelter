const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
    // Created incase name registration is required later
    // firstName: {
    //     type: String,
    //     required: [true, "First name is required"]
    // },
    // lastName: {
    //     type: String,
    //     required: [true, "Last name is required"]
    // },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }        
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
    
}, {timestamps: true});


// add this after AdminSchema is defined
AdminSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );
    
    
AdminSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});
    

// add this after the validate function
AdminSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => 
        {this.password = hash;
        next();
    });
});


module.exports = mongoose.model("Admin", AdminSchema)