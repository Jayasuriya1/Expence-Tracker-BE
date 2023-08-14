const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type:String,
    required:true,
    validate:(value)=> validator.isEmail(value)
  },
  account:{
    type:String,
    default:"inactive",
    require:false
  },
  password: {
    type: String,
    required: true
  }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
