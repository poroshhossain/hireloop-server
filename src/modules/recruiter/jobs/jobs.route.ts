import { Router } from "express";
import { postJob } from "./jobs.contoller.js";


const jobRouter = Router();

jobRouter.post("/", postJob);

export default jobRouter;