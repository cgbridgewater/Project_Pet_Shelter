const Event = require('../models/event.model')
// const today = Date("<YYYY-mm-dd>").toString

module.exports.create = (req, res) => {
    Event.create(req.body)
    .then(result => res.json(result))
    .catch(err => {
        res.status(400).json({message: "Something went wrong with Creat in Axios",error: err})
    });
}

module.exports.getAll = (req,res) => {
    Event.find({})
        .then(result => {
            console.log(result)
            res.json(result);
        })
        .catch((err) => res.status(400).json({message: " Something went wrong with the GetAll in Axios",error: err}))
}

module.exports.sorter = (req,res) => {
    Event.find({
        date: 
        {$gt: (req.params.today)}
})
            .then(result => {
                console.log(result)
                res.json(result);
            })
            .catch((err) => res.status(400).json({message: "Something went wrong with the Sorter in Axios",error: err}))
}

module.exports.getOne = (req,res) => {
    Event.findOne({_id: req.params.id})
            .then(result => {
                console.log(result)
                res.json(result);
            })
            .catch((err) => res.status(400).json({message: "Something went wrong with FindOne in Axios",error: err}))
}

module.exports.update = (req,res) => {
    Event.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updated => {
            console.log(updated)
            res.json(updated);
        })
        .catch((err) => res.status(400).json({message: "Something went wrong with FindOneAndUpdate in Axios",error: err}))
}

module.exports.delete = (req,res) => {
    Event.deleteOne({ _id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => res.status(400).json({message: "Something went wrong with Delete in Axios",error: err}))
}
