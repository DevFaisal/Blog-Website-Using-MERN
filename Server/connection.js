import mongoose from "mongoose";

const connectDB = () => {
    const username = "faisalfarooq";
    const password = "Sopore@123"; // Update with your actual password
    const clusterAddress = "@cluster0.mi9kmil.mongodb.net";
    const databaseName = "Users";

    // Construct the connection string with encoded password
    const connectionString = `mongodb://127.0.0.1:27017/${databaseName}`;

    mongoose.connect(connectionString)
        .then(() => console.log("MongoDB Connected"))
        .catch((e) => console.log("Error ->", e));
};

export default connectDB;
