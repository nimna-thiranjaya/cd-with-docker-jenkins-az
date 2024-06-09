const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },

  profileImage: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Student", studentSchema);
