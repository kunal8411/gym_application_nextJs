
const mongoose = require("mongoose");

const MembershipPlanSchema = new mongoose.Schema(
  {
    tenure: {
      type: Number,
      required: true,
      enum: [1, 3, 6, 12],
      unique: true,
    },
    personal_trainer: {
      type: Boolean,
      required: true,
    },
    no_of_people: { type: Number, required: true },
    no_of_visits: { type: Number, required: true },
    amount: { type: Number, required: true },
    type_of_membership: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.MembershipPlan ||
  mongoose.model("MembershipPlan", MembershipPlanSchema);
