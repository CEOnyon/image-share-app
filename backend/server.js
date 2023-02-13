//allows use of express cors and moongoose
const { cloudinary } = require('./utils/cloudinary');
const express = require('express');
const dontenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require(`mongoose`);

//connection between data, apps and the user
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json())
app.use(cors());

// app.get('/api/images', async (req, res) => {
//     const { resources } = await cloudinary.search
//         .expression('folder:dev_setups')
//         .sort_by('public_id', 'desc')
//         .max_results(30)
//         .execute();

//     const publicIds = resources.map((file) => file.public_id);
//     res.send(publicIds);
// });

// app.post('/api/upload', async (req, res) => {
//     try {
//         const fileStr = req.body.data;
//         const uploadResponse = await cloudinary.uploader.upload(fileStr, {
//             upload_preset: 'dev_setups',
//         });
//         console.log(uploadResponse);
//         res.json({ msg: 'yaya' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ err: 'Something went wrong' });
//     }
// });


const port = process.env.PORT
app.listen(port, () =>{
    console.log(`Server is running on: ${port}`)
});