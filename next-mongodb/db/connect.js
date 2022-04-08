import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
           useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connect DB successfully!!")
    } catch (error) {
        console.log(error);
        console.log("Connect DB failed");
        process.exit(1);
    }
}
export default connectDB;