// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient } = require("mongodb");
import dbConnect from "../../../utils/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  const { method } = req;
//   console.log("trying to connect to mongodb");
  let result = await dbConnect();
//   console.log("after connecting to mongodb", result);

//how to connect to mongodb?

  switch (method) {
    case "GET":
      const users = await User.find({});
      try {
        console.log("hello user");
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      const user = new User(req.body);
      try {
        console.log("user", user);
        const result = await user.save();
        res.status(201).json({ success: true, data: result });
      } catch (error) {
        console.log("error is", error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
