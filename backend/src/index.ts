import "dotenv/config";
import express from "express";
import cors from "cors";
import pino from "pino";
import authRoutes from "./routes/auth";
import activityRoutes from "./routes/activities";
import routeRoutes from "./routes/routes";
import eventRoutes from "./routes/events";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: { colorize: true },
  },
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRoutes);
app.use("/activities", activityRoutes);
app.use("/routes", routeRoutes);
app.use("/events", eventRoutes);

app.listen(port, () => {
  logger.info(`GoTrack server running on port ${port}`);
});

export default app;
