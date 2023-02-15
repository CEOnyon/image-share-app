// Load Local Environment Configuration
import * as dotenv from "dotenv";
dotenv.config();

//allows use of express cors and moongoose

import express from "express";
import cors from "cors";
import multer from "multer";
import {readChunk} from 'read-chunk';
import imageType, {minimumBytes} from 'image-type';
import { nanoid } from "nanoid";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

// Setup Express
const app = express();              // Setup Express
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
app.use(express.json({ limit: '50mb' }));
app.use(cors());




const port = process.env.PORT || 5001;

app.listen(port, () =>{
    console.log(`Server is running on: ${port}`)
});

app.get("/", (req, res) => {
    res.json({ i: "win" });
});

app.post("/image", upload.single('gif'), async (req, res) => {
    const buffer = await readChunk(req.file.path, {length: minimumBytes});
    let meta = await imageType(buffer);
    if (meta === false) {
        return res.status(415).end()
    }
    console.log(req.body, req.file, meta)
    res.json({ my: "butt"});
});