import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const options = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

export const db = mongoose
  .connect(process.env.DB_URL || "", options)
  .then((res) => {
    if (res) {
      console.log(`Database connected succeffully `);
    }
  })
  .catch((err) => {
    console.log(`error connecting to databse | error ${err}`);
  });
