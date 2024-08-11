import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    console.log("Attempting to connect to mongodb");
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongo!");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
