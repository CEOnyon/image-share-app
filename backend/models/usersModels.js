const mongoose = require(`mongoose`);
const {isEmail} = require(`validator`);
const bcrypt = require("bcrypt");

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

// const User = mongoose.model(`User`, userSchema);

// module.exports = User;

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error("incorrect password");
    }
    throw Error("incorrect email");
  };
  
  module.exports = mongoose.model("Users", userSchema);