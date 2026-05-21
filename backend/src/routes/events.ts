import { Router, Response } from "express";
import prisma from "../lib/prisma";
import { authMiddleware, AuthRequest } from "../middleware/auth";

const router = Router();

router.use(authMiddleware);

router.get("/", async (req: AuthRequest, res: Response) => {
  const events = await prisma.event.findMany({
    where: { OR: [{ userId: req.userId }, { privacy: "public" }] },
    include: { route: true, participants: true },
    orderBy: { date: "desc" },
  });
  res.json(events);
});

router.post("/", async (req: AuthRequest, res: Response) => {
  const {
    title,
    description,
    date,
    location,
    difficulty,
    maxParticipants,
    privacy,
    routeId,
  } = req.body;

  const event = await prisma.event.create({
    data: {
      userId: req.userId!,
      title,
      description,
      date: new Date(date),
      location,
      difficulty,
      maxParticipants,
      privacy,
      routeId,
    },
  });
  res.status(201).json(event);
});

router.get("/:id", async (req: AuthRequest, res: Response) => {
  const event = await prisma.event.findFirst({
    where: { id: req.params.id },
    include: { route: true, participants: { include: { user: true } } },
  });
  if (!event) return res.status(404).json({ error: "Event not found" });
  res.json(event);
});

export default router;
