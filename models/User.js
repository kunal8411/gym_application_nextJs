

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  email: { type: String, required: true,unique: true },
  phoneNumber: { type: String, required: true,unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  payment: { type: Number, required: true },
});

export default mongoose.models['Users'] || mongoose.model('Users', UserSchema);

