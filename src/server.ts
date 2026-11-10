import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT;

const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();