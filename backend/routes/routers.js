const express = require(`express`);


const {getUser, deleteUser} = require(`..//controllers/newUser`);

const router = express.Router();


router.get(`/`, getUser)



