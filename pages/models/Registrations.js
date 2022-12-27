const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

export default mongoose.models["Registrations"] ||
  mongoose.model("Registrations", RegistrationSchema);

// module.exports = mongoose.model('users', RegistrationSchema);
// const User = mongoose.model("User", RegistrationSchema);

// module.exports = User;
