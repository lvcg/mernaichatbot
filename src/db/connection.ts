import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Could not connect to MongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.error("Error disconnecting from MongoDB:", error);
        // Depending on your use case, you might choose to omit the following line.
        throw new Error("Could not disconnect from MongoDB");
    }
}

export { connectToDatabase, disconnectFromDatabase };