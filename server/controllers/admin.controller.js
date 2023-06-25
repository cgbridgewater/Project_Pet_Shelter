const User = require('../models/admin.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports= {

    // // // FIND ALL (for future build out use)
        // findAll : (req,res) => {
        //     User.find()
        //         .then(results => res.json(results))
        //         .catch(err => res.status(400).json(err))
        // },
    
    
    // // // REGISTER NEW USER
        register :async (req, res) => {
            // // Check if email is in use
            const user = await User.findOne({email: req.body.email})
            if (user !== null) {
                return res.status(400).json({message: "Email already used"})
            }
            // // if email is origional Make user
            User.create(req.body)
                .then(newUser => {
                    const userToken = jwt.sign({
                        id: newUser._id
                    }, process.env.SECRET_KEY);
                    res
                    .cookie("usertoken", userToken, {httpOnly:true})
                    .json({ msg: "Great Success, You are registered!", user: newUser });
                })
                .catch(err => res.status(400).json({message: "Problem with registration",error: err}));
        },
    
    
    // // // LOG-IN USER
        login :async (req, res) => {
            const user = await User.findOne({email: req.body.email})
            if (user === null) {
            
                // If user does not match existing user, give error
                return res.status(400).json({message: "Invalid login"})
            }
            
            //User found in database
            const correctPassword = await bcrypt.compare(req.body.password, user.password)
            
            // If password does not match stored password, give error
            if (!correctPassword) {
                return res.status(400).json({message: "Invalid login"})
            }
            
            // create token
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
            
            //create cookie!
            res
                .cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .json({ msg: "success!" });
        },
    
        // LOG OUT (close cookie session)
        logout: (req,res) => {
            res.clearCookie('usertoken');
            res.sendStatus(200);
        },
    
        // GET ONE USER BY ID
        getOne : (req, res) => {
            User.findOne({_id: req.params.id})
                .then(results => res.json(results))
                .catch((err) => res.status(400).json(err))
        },
    
    // // // UPDATE USER (for future build out use)
        // update : (req,res) => {
        //     User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        //         .then(updatedResults => res.json(updatedResults))
        //         .catch((err) => res.status(400).json(err))
        // },
    
    
    // // // DELETE USER (for future build out use)
        // delete : (req,res) => {
        //     User.deleteOne({ _id: req.params.id})
        //         .then(deleteConfirmation => res.json(deleteConfirmation))
        //         .catch(err => res.json({message: "Something went wrong with Delete",err}))
        // } 
    
    }