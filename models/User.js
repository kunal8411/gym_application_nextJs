const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  tenure: { type: Number, required: true },

  age: {
    type: Number,
    default: 0,
  },
  payment: { type: Number, required: true },
  profileImage: {
    type: Buffer,
    required: false,
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
 

  
  
  
 
});

export default mongoose.models["Users"] || mongoose.model("Users", UserSchema);
