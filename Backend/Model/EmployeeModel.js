const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmpSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please Write your E-mail"],
    unique: true,
  },
  salary: {
    type: Number,
  },
  designation: {
    type: String,
  },
});

const Emp = mongoose.model("emp", EmpSchema);
module.exports = Emp;