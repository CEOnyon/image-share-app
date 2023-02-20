const express = require('express')
const router = express.Router()
const {getImage, postImage} = require('../controllers/pictureController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getImage).post(protect, postImage)



module.exports = router