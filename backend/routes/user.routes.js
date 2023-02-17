
// const express = require('express');
const router = require(`express`).Router();

//deconstruct to get register and login
const { registerUser, loginUser } = require(`../controllers/usercontroller`);
const { getImage, postImage} = require(`../controllers/picturecontroller`);


const multer  = require('multer');
const Upload = require("../models/pictureModels");


//setting options for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//Routes by page

//user stuff
//login user
router.post(`/login`, loginUser);

//signup user
router.post(`/signup`, registerUser); 

//image stuff
// //getting pictures
// router.get('/api/images', getImage);

// //posting pictures
// router.post('/api/upload', postImage);


//will figure out latter
//router.get()

module.exports = router;