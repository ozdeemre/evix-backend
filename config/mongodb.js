import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is missing!');
  }

  mongoose.connection.on('connected', () => {
    console.log('DB Connected');
  });

  await mongoose.connect(uri);
};

export default connectDB;
