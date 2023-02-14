
//require express
const router = require(`express`).Router();
//deconstruct to get register and login
const { registerUser, loginUser } = require(`../controllers/usercontroller`);
const { getImage, postImage} = require(`../controllers/picturecontroller`);

//Routes by page

//user stuff
//login user
router.post(`/login`, loginUser);

//signup user
router.post(`/signup`, registerUser); 

//image stuff
//getting pictures
app.get('/api/images', getImage);

//posting pictures
app.post('/api/upload', postImage);


//will figure out latter
//router.get()

module.exports = router;