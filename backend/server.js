// Load Local Environment Configuration
import * as dotenv from "dotenv";
dotenv.config();

//allows use of express cors and moongoose

import express from "express";
import cors from "cors";
import multer from "multer";
import { nanoid } from "nanoid";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
// import mongoose from "mongoose";
import cookieParser from "cookie-parser"


// Setup Express
const app = express();              
app.use(express.json());            // Accept JSON data on post
app.use((err, req, res, next) => {  // Default Error Handler (Send errors to Console, not to Client)
  console.error(err.stack)
  return res.status(500).send('Application Error, Check Logs.');
});

// Setup Multer
const upload = multer({  
    limits: {              // Limits to uploaded content.
      fileSize: 5242880,   // 5 megabytes in bytes
    }
  });

  // Setup Middleware
app.use(express.static('public'));
app.use(cors({
  origin: ["http://localhost:5001"],
  methods: ["GET", "POST"],
  credentials: true,
}));

// Login and Signup
app.use(cookieParser());



 // Start Express
const port = process.env.PORT || 5001;
app.listen(port, () =>{
  console.log(`Server is running on: ${port}`)
}); 


// Default Homepage
app.get("/", (req, res) => {
    return res.send("Hello World.").end();
});

// Image Upload
app.post("/upload", upload.single('image'), async (req, res) => {

    // Define image mime types we will allow.
    const allowedImageTypes = [
      "image/gif",
      "image/jpeg",
      "image/png",
      "image/webp"
    ]
  
    // Validate we have a buffer
    if(!("file" in req)) {
      return res.status(400).send("Invalid Upload.");
    }
  
  
    // If we have gotten this far, the file is now loaded into memory at
    // req.file.buffer as a buffer. Let's pass in the buffer into the
    // image-type script to detect if it's a valid image.
    const imageMeta = await imageType(req.file.buffer);
    if(!allowedImageTypes.includes(imageMeta.mime)) {
      console.log("Invalid Image Uploaded.", imageMeta); // Error message to console.
      return res.status(400).send("Invalid Image Type"); // Send error to client. Halt further code.
    }
  
   //create a random string for the image name.
    const id = nanoid();              
  
    // Create the image object, probably sending this to Mongo.
    let imageContent = {
      name: req.file.originalname,        // Name of file on uploaders computer.
      nameOnS3: `${id}.${imageMeta.ext}`, // Name of file on S3.
      type: imageMeta.ext,                // Image Type, (such as jpeg, gif, etc)
    }
  
    // Setup S3 Command
    const input = {
      Bucket: process.env.BUCKET_NAME,
      Body: req.file.buffer,
      ContentType: imageMeta.mime,
      Key: `${process.env.BUCKET_PREFIX}/${imageContent.nameOnS3}`
    };
  
    const client   = new S3Client();
    const command  = new PutObjectCommand(input);
    await client.send(command);
  
    const public_url = `${process.env.BUCKET_URL}${input.Key}`;
  
    const output = {
      meta: imageMeta,
      filename: imageContent.nameOnS3,
      s3_url: public_url,
      cloudinary_url: `${process.env.CLOUDINARY_URL}/image/fetch/c_crop,h_300,w_300/r_max/${public_url}`
    };
  
    return res.json(output);
  
  });
