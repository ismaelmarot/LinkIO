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

router.get("/templates", async (req: AuthRequest, res: Response) => {
  const templates = await prisma.event.findMany({
    where: { userId: req.userId, isTemplate: true },
    orderBy: { updatedAt: "desc" },
  });
  res.json(templates);
});

router.post("/", async (req: AuthRequest, res: Response) => {
  const {
    title,
    description,
    date,
    location,
    latitude,
    longitude,
    photoUrl,
    difficulty,
    maxParticipants,
    privacy,
    routeId,
    isTemplate,
  } = req.body;

  const event = await prisma.event.create({
    data: {
      userId: req.userId!,
      title,
      description,
      date: new Date(date),
      location,
      latitude,
      longitude,
      photoUrl,
      difficulty,
      maxParticipants,
      privacy,
      routeId,
      isTemplate: isTemplate || false,
    },
  });
  res.status(201).json(event);
});

router.patch("/:id", async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  const event = await prisma.event.findFirst({
    where: { id, userId: req.userId },
  });
  if (!event) return res.status(404).json({ error: "Event not found" });

  const updated = await prisma.event.update({
    where: { id },
    data: req.body,
  });
  res.json(updated);
});

router.post("/:id/favorite", async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  const event = await prisma.event.findFirst({
    where: { id, userId: req.userId },
  });
  if (!event) return res.status(404).json({ error: "Event not found" });

  const updated = await prisma.event.update({
    where: { id },
    data: { isFavorite: !event.isFavorite },
  });
  res.json(updated);
});

router.post("/:id/duplicate", async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  const original = await prisma.event.findFirst({
    where: { id, userId: req.userId },
  });
  if (!original) return res.status(404).json({ error: "Event not found" });

  const copy = await prisma.event.create({
    data: {
      userId: req.userId!,
      title: `${original.title} (copia)`,
      description: original.description,
      date: new Date(),
      location: original.location,
      latitude: original.latitude,
      longitude: original.longitude,
      photoUrl: original.photoUrl,
      difficulty: original.difficulty,
      maxParticipants: original.maxParticipants,
      privacy: original.privacy,
      routeId: original.routeId,
      isTemplate: false,
      isFavorite: false,
    },
  });
  res.status(201).json(copy);
});

router.get("/:id", async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  const event = await prisma.event.findFirst({
    where: { id },
    include: { route: true, participants: { include: { user: true } } },
  });
  if (!event) return res.status(404).json({ error: "Event not found" });
  res.json(event);
});

export default router;
