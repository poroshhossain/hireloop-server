
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_URI as string);

export async function connectToMongoDB() {
  try {
    await client.connect();

    console.log("MongoDB connected successfully!");

    return client.db("hireloop-db");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}
