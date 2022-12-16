const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  timestamps: true,
});

export default mongoose.models["Users"] || mongoose.model("Users", UserSchema);

// module.exports = mongoose.model('users', UserSchema);
// const User = mongoose.model("User", UserSchema);

// module.exports = User;
