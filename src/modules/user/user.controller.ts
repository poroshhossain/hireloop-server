import type { Request, Response } from "express";

let usersDB = [
  {
    id: 1,
    name: "Porosh",
    email: "porosh@example.com",
  },
  {
    id: 2,
    name: "Rahim",
    email: "rahim@example.com",
  },
];


// GET: All users
export const getUsers = (req: Request, res: Response) => {
  const users = usersDB;

  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
};