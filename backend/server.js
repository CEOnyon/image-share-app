//allows use of express cors and moongoose
const { cloudinary } = require('./utils/cloudinary');
const app = require('express').Router();
const dontenv = require("dotenv").config();
//const app = express();
const cors = require("cors");
const mongoose = require(`mongoose`);

//connection between data, apps and the user
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const port = process.env.PORT
app.listen(port, () =>{
    console.log(`Server is running on: ${port}`)
});