const mongoose = require(`mongoose`);
const {isEmail} = require(`validator`);

//the build of user
const userSchema = mongoose.Schema({
    
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
        required: [true, "Email is Required"],
        lowcase: [true],
        validate: [isEmail]
    },
    
    password: {
        type: String, 
        required: [true, "Password is Required"],
        minlength: [6]
    },

});

module.exports = mongoose.model(`User`, userSchema);

