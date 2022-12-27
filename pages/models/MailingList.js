const mongoose = require("mongoose");

const MailingListSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    subsribed: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models["MailingList"] ||
  mongoose.model("MailingList", MailingListSchema);
