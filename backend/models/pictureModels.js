const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    contentId: String,
    fileName: String,
    fileNameOnS3: String,
    width: Number,
    height: Number,
    imageType: String,
    //todo add user id ref
    imageCreated: {
        type: Date,
        default: Date.now
    },
    meta: {
        gag: {
             type: Number,
             default: 0
        },
        thumbsUp: {
            type: Number,
            default: 0
        },
        thumbsDown: {
            type: Number,
            default:0
        }
    }
});

module.exports = new mongoose.model("Image", imageSchema);