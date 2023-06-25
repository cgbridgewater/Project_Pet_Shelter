const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require('cors');
const app = express();
const PORT = 8000;

require('dotenv').config(); 

app.use(cookieParser());
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config.js');
require('./routes/admin.routes')(app);
require('./routes/pets.routes')(app);
require('./routes/adopt.routes')(app);
require('./routes/events.routes')(app);

app.listen(PORT,() => {
    console.log(`WOOF!!! Listening on Port: ${PORT}`)
});