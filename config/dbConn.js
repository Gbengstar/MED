import mongoose from "mongoose";

// configuration setup to connect with the database

const connectDB = async () => {
  try {
    await mongoose.connect( process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (error) {
      console.log(error)
  }
};

export default connectDB