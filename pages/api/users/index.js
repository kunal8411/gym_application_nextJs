// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient } = require("mongodb");
import dbConnect from "../../../utils/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  const { method } = req;
  let result = await dbConnect();
  switch (method) {
    case "GET":
      const allUsers = await User.find()
        .limit(req.query.limit)
        .sort({ _id: -1 });
      const allUsersStats = await User.aggregate([
        {
          $group: {
            _id: "",
            allPayment: { $sum: "$payment" },
            totalUsers: {
              $sum: 1,
            },
          },
        },
        {
          $project: {
            _id: 0,
            allPayment: "$allPayment",
            email: "$email",
            totalUsers: "$totalUsers",
          },
        },
      ]);

      try {
        res.status(200).json({
          success: true,
          data: [{ allUsers, allUsersStats }],
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      const user = new User(req.body);
      try {
        const result = await user.save();
        res.status(201).json({ success: true, data: result });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
