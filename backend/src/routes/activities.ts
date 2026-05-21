import { Router, Response } from "express";
import prisma from "../lib/prisma";
import { authMiddleware, AuthRequest } from "../middleware/auth";

const router = Router();

router.use(authMiddleware);

router.get("/", async (req: AuthRequest, res: Response) => {
  const activities = await prisma.activity.findMany({
    where: { userId: req.userId },
    orderBy: { createdAt: "desc" },
  });
  res.json(activities);
});

router.post("/", async (req: AuthRequest, res: Response) => {
  const { sportType, startTime } = req.body;
  const activity = await prisma.activity.create({
    data: { userId: req.userId!, sportType, startTime: new Date(startTime) },
  });
  res.status(201).json(activity);
});

router.get("/:id", async (req: AuthRequest, res: Response) => {
  const activity = await prisma.activity.findFirst({
    where: { id: req.params.id, userId: req.userId },
    include: { points: true },
  });
  if (!activity) return res.status(404).json({ error: "Activity not found" });
  res.json(activity);
});

export default router;
