const express = require('express')
const router = express.Router();

//deconstruct to get register and login
const { registerUser, loginUser, getMe } = require(`../controllers/userController`);
// const { getImage, postImage} = require(`../controllers/pictureController`);
const {protect} = require('../middleware/authMiddleware');

//middleware simplifying form-data for uploads
// const multer  = require('multer');
// const Upload = require("../models/pictureModels");


//setting options for multer
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

//Routes by page

//user stuff
//login user
router.post(`/login`, loginUser);

//getting user and protect
router.get('/me', protect, getMe);

//signup user
router.post(`/signup`, registerUser); 

//image stuff
//getting pictures
// router.get('/api/images', getImage);

// //posting pictures
// router.post('/api/upload', postImage);

module.exports = router
