import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // connect to mongoDB
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log(
            `MongoDB Connected: ${conn.connection.host}`.cyan.underline
        );
    } catch (error) {
        console.error(`Error: ${error.message}`.trimEnd.underline.bold);
        // exit with failure
        process.exit(1);
    }
};

export default connectDB;
