const Adopt = require('../models/adopt.model')

module.exports.create = (req, res) => {
    Adopt.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(400).json({message: "Something went wrong with Creat in Axios",error: err})
    });
}

module.exports.getAll = (req,res) => {
    Adopt.find({})
        .then(result => {
            res.json(result);
        })
        .catch((err) => res.status(400).json({message: "Something went wrong with the GetAll in Axios",error: err}))
}

module.exports.getOne = (req,res) => {
    Adopt.findOne({_id: req.params.id})
        .then(result => {
            res.json(result);
        })
        .catch((err) => res.status(400).json({message: "Something went wrong with FindOne in Axios",error: err}))
}

module.exports.delete = (req,res) => {
    Adopt.deleteOne({ _id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => res.status(400).json({message: "Something went wrong with Delete in Axios",error: err}))
}