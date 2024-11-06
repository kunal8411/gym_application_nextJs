// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient } = require("mongodb");
import dbConnect from "../../../utils/dbConnect";
import MailingList from "../../../models/MailingList";
import MembershipPlan from "../../../models/MembershipPlan";

export default async function handler(req, res) {
  const { method } = req;
  let result = await dbConnect();
  switch (method) {
    case "GET":
      try {
        const allmembershipDetails = await MembershipPlan.find();
        res.status(200).json({ success: true, message: allmembershipDetails });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    case "POST":
      console.log("REQ BODY IS ", req.body);
      const newMembershipPlan = new MembershipPlan(req.body);
      try {
        const result = await newMembershipPlan.save();
        res.status(201).json({ success: true, message: result });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    case "PUT":
      console.log("REQ BODY IS ", req.body);
      const { _id, updateData } = req.body;

      try {
        const updatedPlan = await MembershipPlan.findByIdAndUpdate(
          _id, // Document ID
          updateData, // Update data
          { new: true, runValidators: true } // Options: return updated document and run validation
        );
        if (!updatedPlan) {
          console.log("Membership plan not found.");
          res
            .status(404)
            .json({ success: false, message: "Membership plan not found." });
        }

        console.log("Updated membership plan:", updatedPlan);
        res.status(200).json({ success: true, message: updatedPlan });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
