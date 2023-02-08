const mongoose = require(`mongoose`);
const {isEmail} = require(`validator`);


const Schema = mongoose.Schema;

//the build of user
const userSchema = new Schema({
    
    //unique prevents multiple of the same name
    
    username: {
        type: String,
        required: [true, `Please enter a userName`],
        unique: [true, `Unfortunately this username is taken`],
        trim: [true],
        minlength: [4,`Minimun user name length is size 4`],
        
    },
    
    email:{
        type: String,
        required: [true, `Please enter an email`],
        lowcase: true,
        validate: [isEmail, `Please enter a valid email`]
    },
    
    password: {
        type: String, 
        required: [true, `please enter a password`],
        minlength: [6, `Minimum password length is 6 characters`]
    }

})

const User = mongoose.model(`User`, userSchema);

module.exports = User;