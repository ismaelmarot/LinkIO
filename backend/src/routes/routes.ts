import { Router, Response } from "express";
import prisma from "../lib/prisma";
import { authMiddleware, AuthRequest } from "../middleware/auth";

const router = Router();

router.use(authMiddleware);

router.get("/", async (req: AuthRequest, res: Response) => {
  const routes = await prisma.route.findMany({
    where: { userId: req.userId },
    orderBy: { createdAt: "desc" },
  });
  res.json(routes);
});

router.post("/", async (req: AuthRequest, res: Response) => {
  const { name, description, sportType, distance, duration, isPublic } =
    req.body;
  const route = await prisma.route.create({
    data: {
      userId: req.userId!,
      name,
      description,
      sportType,
      distance,
      duration,
      isPublic,
    },
  });
  res.status(201).json(route);
});

export default router;
