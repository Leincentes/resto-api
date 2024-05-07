import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log('Database Connected');
    } catch (error: any) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
};

export default connectDB;