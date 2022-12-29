// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient } = require("mongodb");
import dbConnect from "../../../utils/dbConnect";
import MailingList from "../../models/MailingList";

export default async function handler(req, res) {
  const { method } = req;
  let result = await dbConnect();
  switch (method) {
    case "GET":
      try {
        const allMailingListEmails = await MailingList.find();
        res.status(200).json({ allMailingListEmails });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    case "POST":
      const newEmailRegistration = new MailingList(req.body);
      try {
        const result = await newEmailRegistration.save();
        res.status(201).json({ success: true, data: result });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
