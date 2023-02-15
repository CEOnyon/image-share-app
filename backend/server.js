//allows use of express cors and moongoose
import express from "express";
import cors from "cors";
import multer from "multer";
import {readChunk} from 'read-chunk';
import imageType, {minimumBytes} from 'image-type';

// Setup Express & Uploads
const app = express();
const upload = multer({ dest: './uploads/' })

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