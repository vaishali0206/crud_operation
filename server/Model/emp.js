const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  department: {
    type: String,
    default: false,
  },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
  email:{
    type:String
  }
});

module.exports = mongoose.model("emp", empSchema);