// /lib/dbConnect.js
import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb://kunalk:mongoKunalGym@ac-limrpmj-shard-00-00.lnumg7p.mongodb.net:27017,ac-limrpmj-shard-00-01.lnumg7p.mongodb.net:27017,ac-limrpmj-shard-00-02.lnumg7p.mongodb.net:27017/?ssl=true&replicaSet=atlas-d8f8n1-shard-0&authSource=admin&retryWrites=true&w=majority";

async function dbConnect() {
  const opts = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // bufferCommands: false,
    // bufferMaxEntries: 0,
    // useFindAndModify: true,
    // useCreateIndex: true,
  };
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error-->>>>>", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
  //  await mongoose
  //     .connect(MONGODB_URI, opts)
  //     .then(() => {
  //       console.log("DB connection successfulllllll-->>>>>>>>");
  //       return [{"connection_successfull":true}]
  //     })
  //     .catch((error) => {
  //       console.log("found this error->", error);
  //     });
}

export default dbConnect;
