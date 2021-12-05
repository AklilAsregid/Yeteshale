const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//setting public folder which will contain uploaded image
app.use(express.static('./public'))

//routes
app.use('/api/index',require('./routes/api/index.js'))

const db = require("./models/")
db.sequelize.sync()

const port = process.env.PORT || 9000
app.listen(port,()=>console.log(`Server is running on port ${port}`))