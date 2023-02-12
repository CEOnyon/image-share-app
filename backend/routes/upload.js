
//require express
const router = require(`express`).Router();
//deconstruct to get register and login
const { registerUser, loginUser } = require(`../controllers/usercontroller`);

//Routes
//login
router.post(`/login`, loginUser);

//signup
router.post(`/signup`, registerUser); 

module.exports = router;