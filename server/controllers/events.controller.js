const Event = require('../models/event.model')

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
        .catch((err) => res.status(400).json({message: "Something went wrong with the GetAll in Axios",error: err}))
}