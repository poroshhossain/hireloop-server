import express from "express";
import cors from "cors";
import useRouter from "./modules/user/user.route.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Health check route
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running!",
  });
});

app.use("/api/v1/users", useRouter);


export default app;