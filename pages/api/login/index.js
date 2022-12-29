// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient } = require("mongodb");
import dbConnect from "../../../utils/dbConnect";
import Admin from "../../models/Admin";
const CryptoJS = require("crypto-js");
export default async function handler(req, res) {
  const { method } = req;
  let result = await dbConnect();
  switch (method) {
    case "GET":
      try {
        const { email, password } = req.query;
        const adminByEmail = await Admin.findOne({
          email: email,
        });
        if (adminByEmail && Object.keys(adminByEmail).length > 0) {
          let hashedPassword = CryptoJS.AES.decrypt(
            adminByEmail.password,
            process.env.PASSWORD_SECRET
          );
          let originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
          if (originalPassword !== password) {
            res
              .status(401)
              .json({ success: false, body: "Password is incorrect" });
          }
          res
            .status(200)
            .json({
              success: true,
              body: "Logged in Successfully",
              data: adminByEmail,
            });
        }

        res.status(200).json({ success: false, body: "Email is incorrect" });
      } catch (error) {
        console.log("error while fetching data from admin DB", error);
      }
      break;
    case "POST":
      const { email, password } = req.body;
      const newAdmin = new Admin({
        email: email,
        password: CryptoJS.AES.encrypt(
          password,
          process.env.PASSWORD_SECRET
        ).toString(),
      });
      //   const newEmailRegistration = new Admin(req.body);
      try {
        const result = await newAdmin.save();
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
