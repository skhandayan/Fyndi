import mongoose from 'mongoose';

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGODB CONNECTED SUCCESSFULLY! ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MONGODB', error);
    process.exit(1) // exit with failure
  }
}

export default connectDB;