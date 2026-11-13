import type { Request, Response } from "express";
import { postJobdb } from "./jobs.service.js";

export const postJob = async (req: Request, res: Response) => {
    const jobData = req.body;
    const jobPost = await postJobdb(jobData);
    res.status(200).json({
        success: true,
        message: "Job posted successfully",
        data: jobPost,
    });

}