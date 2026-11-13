import type { Request, Response } from "express";
import { connectToMongoDB } from "../../config/database.js";



const db = await connectToMongoDB();
const userCollection = db?.collection("user");




// GET: All users
export const getUsers = async(req: Request, res: Response) => {
  const users = await userCollection?.find({}).toArray() ;

  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
};