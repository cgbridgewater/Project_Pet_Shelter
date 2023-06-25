const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Establishing your connection to the PET SHELTER database... right MEOW!!"))
    .catch(err => console.log("Ruh Roh, there was a puuuuroblem connecting to the database",err))