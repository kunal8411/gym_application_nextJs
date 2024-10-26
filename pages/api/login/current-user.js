// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient } = require("mongodb");
import dbConnect from "../../../utils/dbConnect";
import Admin from "../../../models/Admin";
const CryptoJS = require("crypto-js");
import jwt from "jsonwebtoken";
import cookieSession from "cookie-session";
export default async function handler(req, res) {
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV === "production",
  })(req, res, () => {});
  const { method } = req;
  let result = await dbConnect();
  switch (method) {
    case "GET":
      try {
        if (!req.session?.jwt) {
          res.status(200).send({currentUser:null})
        }

        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
        res.status(200).send({currentUser:payload})
      } catch (error) {
        console.log("error while fetching data from admin DB", error);
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
