
const express = require('express');
const router = require(`express`).Router();
const multer  = require('multer');
const Upload = require("../models/pictureModels");
const app = express();

//setting options for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });





//Routes
//login
router.post(`/login`, loginUser);

//signup
router.post(`/signup`, registerUser); 

module.exports = router;