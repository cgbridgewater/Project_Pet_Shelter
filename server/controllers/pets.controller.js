const Pets = require('../models/pets.model')

module.exports.index = (req, res) => {
    res.json({
        message: "Dojo Pet Shelter!"
    });
}

module.exports.create = (req, res) => {
    Pets.create(req.body)
    .then(result => res.json(result))
    .catch(err => {
        res.status(400).json({message: "Something went wrong with Creat in Axios",error: err})
    });
}

module.exports.getAll = (req,res) => {
    Pets.find({})
        .then(result => {
            console.log(result)
            res.json(result);
        })
        .catch((err) => res.status(400).json({message: "Something went wrong with the GetAll in Axios",error: err}))
}

module.exports.getOne = (req,res) => {
    Pets.findOne({_id: req.params.id})
            .then(result => {
                console.log(result)
                res.json(result);
            })
            .catch((err) => res.status(400).json({message: "Something went wrong with FindOne in Axios",error: err}))
}

module.exports.sorter = (req,res) => {
    Pets.find({type: req.params.type})
            .then(result => {
                console.log(result)
                res.json(result);
            })
            .catch((err) => res.status(400).json({message: "Something went wrong with the Sorter in Axios",error: err}))
}

module.exports.update = (req,res) => {
    Pets.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updated => {
            console.log(updated)
            res.json(updated);
        })
        .catch((err) => res.status(400).json({message: "Something went wrong with FindOneAndUpdate in Axios",error: err}))
}

module.exports.delete = (req,res) => {
    Pets.deleteOne({ _id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => res.status(400).json({message: "Something went wrong with Delete in Axios",error: err}))
}