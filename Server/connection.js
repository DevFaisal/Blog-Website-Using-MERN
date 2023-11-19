import mongoose from "mongoose";

const connectDB = () => {
    // const username = "faisalfarooq";
    // const password = "Sopore@123"; 
    // const clusterAddress = "@cluster0.mi9kmil.mongodb.net";
    const databaseName = "ByteBurstBlogs";

    // Construct the connection string with encoded password
    const connectionString = `${process.env.MONGODB_URI}/${databaseName}`;

    mongoose.connect(connectionString)
        .then(() => console.log("MongoDB Connected"))
        .catch((e) => console.log("Error ->", e));
};

export default connectDB;
