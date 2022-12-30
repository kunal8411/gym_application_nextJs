// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient } = require("mongodb");
import dbConnect from "../../../utils/dbConnect";
import Registrations from "../../../models/Registrations";

export default async function handler(req, res) {
  const { method } = req;
  let result = await dbConnect();
  switch (method) {
    case "GET":
      try {
        const allRegistrations = await Registrations.find();
        res.status(200).json({ allRegistrations });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      const newRegistrations = new Registrations(req.body);
      try {
        const result = await newRegistrations.save();
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
