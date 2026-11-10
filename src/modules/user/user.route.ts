import { Router } from "express";
import { getUsers } from "./user.controller.js";

// user.route.ts
const router = Router();

router.get("/", getUsers);
// router.post("/", createUser);

export default router;