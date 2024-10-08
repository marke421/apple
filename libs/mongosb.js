import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
