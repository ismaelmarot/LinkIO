import { Router, Response } from "express";
import prisma from "../lib/prisma";
import { authMiddleware, AuthRequest } from "../middleware/auth";

const router = Router();

router.use(authMiddleware);

router.get("/", async (req: AuthRequest, res: Response) => {
  const limit = req.query.limit as string | undefined;
  const activities = await prisma.activity.findMany({
    where: { userId: req.userId },
    orderBy: { createdAt: "desc" },
    take: limit ? Number(limit) : undefined,
  });
  res.json(activities);
});

router.get("/stats", async (req: AuthRequest, res: Response) => {
  const activities = await prisma.activity.findMany({
    where: { userId: req.userId, status: "completed" },
  });

  const totalOutings = activities.length;
  const totalDistance = activities.reduce(
    (sum, a) => sum + (a.distance || 0),
    0
  );
  const totalEvents = await prisma.eventParticipant.count({
    where: { userId: req.userId },
  });

  res.json({
    totalOutings,
    totalDistance: `${totalDistance.toFixed(2)} km`,
    totalEvents,
  });
});

router.get("/:id", async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  const activity = await prisma.activity.findFirst({
    where: { id, userId: req.userId },
    include: { points: true },
  });
  if (!activity) return res.status(404).json({ error: "Activity not found" });
  res.json(activity);
});

router.post("/", async (req: AuthRequest, res: Response) => {
  const {
    sportType,
    startTime,
    endTime,
    duration,
    distance,
    avgSpeed,
    maxSpeed,
    elevation,
    calories,
    points,
  } = req.body;

  const activity = await prisma.activity.create({
    data: {
      userId: req.userId!,
      sportType: sportType || "running",
      startTime: new Date(startTime),
      endTime: endTime ? new Date(endTime) : null,
      duration: duration || 0,
      distance: distance || 0,
      avgSpeed: avgSpeed || 0,
      maxSpeed: maxSpeed || 0,
      elevation: elevation || null,
      calories: calories || null,
      status: "completed",
      points: points
        ? {
            create: points.map((p: any) => ({
              latitude: p.latitude,
              longitude: p.longitude,
              altitude: p.altitude || null,
              speed: p.speed || null,
              timestamp: new Date(p.timestamp),
            })),
          }
        : undefined,
    },
    include: { points: true },
  });

  res.status(201).json(activity);
});

export default router;
