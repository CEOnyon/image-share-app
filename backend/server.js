//allows use of express cors and moongoose
const express = require('express');
const cors = require("cors");
const mongoose = require(`mongoose`);
//require dotenv
require("dotenv").config();

const app = express();
const port = process.env.PORT

//connection between data, apps and the user
app.use(cors());
//use of json
app.use(express.json());


app.listen(port, () =>{
    console.log(`Server is running on: ${port}`)
})