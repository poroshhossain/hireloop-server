import { connectToMongoDB } from "../../../config/database.js";

const db = await connectToMongoDB();
const jobCollection = db?.collection("jobs");

export const postJobdb = async (jobData: Object) => {
    console.log(jobData)
    const result = await jobCollection?.insertOne(jobData);
    return result;
}