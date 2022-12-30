// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient } = require("mongodb");
import dbConnect from "../../../../utils/dbConnect";
import User from "../../../../models/User";
import moment from "moment";

export default async function handler(req, res) {
  const { method } = req;
  let result = await dbConnect();

  switch (method) {
    case "GET":
      let todaysDate = moment().format("YYYY-MM-DD");
      let nextWeeksDate = moment().add(7, "d").format("YYYY-MM-DD");

      const usersRegistrationsEndingThisWeek = await User.find({
        endDate: {
          $gte: new Date(todaysDate),
          $lte: new Date(nextWeeksDate),
        },
      });
      const weeklyUsersStats = await User.aggregate([
        {
          $match: {
            endDate: {
              $gte: new Date(todaysDate),
              $lte: new Date(nextWeeksDate),
            },
          },
        },
        {
          $group: {
            _id: "",
            thisWeeksPayment: { $sum: "$payment" },
            newUsers: {
              $sum: 1,
            },
          },
        },
        {
          $project: {
            _id: 0,
            thisWeeksPayment: "$thisWeeksPayment",
            email: "$email",
            newUsers: "$newUsers",
          },
        },
      ]);

      try {
        res.status(200).json({ success: true, data: [{usersRegistrationsEndingThisWeek,weeklyUsersStats}] });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
