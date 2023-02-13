const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    fileName: {
        name: String,
        desc: String,
    },
    file: {
        data: Buffer,
        contentType: string
    }
});

module.exports = new mongoose.model("Image", imageSchema);