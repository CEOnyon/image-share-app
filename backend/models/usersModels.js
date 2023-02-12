const mongoose = require(`mongoose`);
const {isEmail} = require(`validator`);

const Schema = mongoose.Schema;

//the build of user
const userSchema = new Schema({
    
    //unique prevents multiple of the same name    
    username: {
        type: String,
        required: [true],
        unique: [true] ,
        trim: [true],
        minlength: [4],
    },
    
    email:{
        type: String,
        required: [true],
        lowcase: [true],
        validate: [isEmail]
    },
    
    password: {
        type: String, 
        required: [true],
        minlength: [6]
    }

})

const User = mongoose.model(`User`, userSchema);

module.exports = User;