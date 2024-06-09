const mongoose = require("mongoose");

const connectDB = async () => {
  const url = process.env.MONGODB_URI || "";

  mongoose.set("strictQuery", true);
  await mongoose
    .connect(url, { authSource: "admin" })
    .then(() => {
      console.log(`DATABASE CONNECTED..!!`);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = connectDB;
