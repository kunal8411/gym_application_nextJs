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
    case "POST":
      try {
        const { email, password } = req.body;

        const existingUser = await Admin.findOne({
          email: email,
        });
        if (!existingUser) {
          res.status(500).send({
            message: "Invalid credentials",
          });
        }
        if (!!existingUser) {
          let hashedPassword = CryptoJS.AES.decrypt(
            existingUser.password,
            process.env.PASSWORD_SECRET
          );
          let originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
          if (originalPassword !== password) {
            res
              .status(401)
              .send({ success: false, message: "Password is incorrect" });
          }

          const jsonWebToken = jwt.sign(
            { id: existingUser._id, email: existingUser.email },
            process.env.JWT_KEY
          );
          req.session = {
            jwt: jsonWebToken,
          };

          res.status(200).send({
            success: true,
            message: "Logged in Successfully",
            data: existingUser,
          });
        }

        res.status(500).json({ success: false, body: "Email is incorrect" });
      } catch (error) {
        console.log("error while fetching data from admin DB", error);
      }
      break;
    // case "POST":
    //   const { email, password } = req.body;
    //   const newAdmin = new Admin({
    //     email: email,
    //     password: CryptoJS.AES.encrypt(
    //       password,
    //       process.env.PASSWORD_SECRET
    //     ).toString(),
    //   });
    //   //   const newEmailRegistration = new Admin(req.body);
    //   try {
    //     const result = await newAdmin.save();
    //     res.status(201).json({ success: true, data: result });
    //   } catch (error) {
    //     res.status(400).json({ success: false, error: error });
    //   }
    //   break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
