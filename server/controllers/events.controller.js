const Event = require('../models/event.model')
const today = Date("<YYYY-mm-dd>").toString


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
        .catch((err) => res.status(400).json({message: "HERE!! Something went wrong with the GetAll in Axios",error: err}))
}

module.exports.sorter = (req,res) => {
    Event.find({
        date: 
        {$gt: (req.params.today)}
         
    // {$gt: ()}"2023-06-13"
})
            .then(result => {
                console.log(result)
                res.json(result);
            })
            .catch((err) => res.status(400).json({message: "Something went wrong with the Sorter in Axios",error: err}))
}
