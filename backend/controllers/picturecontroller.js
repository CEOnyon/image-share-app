// // GET PHOTO ROUTE: 
const asyncHandler = require('express-async-handler')

const Image = require('../models/pictureModels')
const User = require('../models/userModels')

//Get Image ROUTE: GET /api/images
const getImage = asyncHandler(async(req, res)=> {
    const image = await Image.find({ user: req.user.id })
    res.status(200).json(image)
})
//Upload Image ROUTE: POST /api/upload
const postImage = asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Upload Image')
    }
    
    const image = await Image.create({
      text: req.body.text,
      user: req.user.id,
    
    })
  
    res.status(200).json(image)
  })

module.exports = {
    getImage,
    postImage
}


