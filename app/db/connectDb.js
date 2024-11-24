import mongoose from "mongoose";

const connectDB = async () => {
  const uri =process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }
    try {
      const conn = await mongoose.connect(uri)
      // console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Database connection error: ${error.message}`);
      process.exit(1);
    }
  }

  export default connectDB