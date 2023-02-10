const express = require(`express`);


const {getUser, deleteUser} = require(`../controllers/register`);

const router = express.Router();


router.get(`/`, getUser)



