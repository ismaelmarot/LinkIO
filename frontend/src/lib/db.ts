import { openDB } from "idb";

const DB_NAME = "gotrack";
const DB_VERSION = 1;

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("activities")) {
      db.createObjectStore("activities", { keyPath: "id" });
    }
    if (!db.objectStoreNames.contains("sync-queue")) {
      db.createObjectStore("sync-queue", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  },
});

export const db = {
  async saveActivity(activity: any) {
    const database = await dbPromise;
    await database.put("activities", activity);
  },

  async getActivity(id: string) {
    const database = await dbPromise;
    return database.get("activities", id);
  },

  async getAllActivities() {
    const database = await dbPromise;
    return database.getAll("activities");
  },

  async deleteActivity(id: string) {
    const database = await dbPromise;
    await database.delete("activities", id);
  },

  async getActivitiesCount(): Promise<number> {
    const database = await dbPromise;
    return database.count("activities");
  },

  // Sync queue
  async enqueue(request: { url: string; method: string; body?: any }) {
    const database = await dbPromise;
    await database.add("sync-queue", {
      ...request,
      createdAt: Date.now(),
    });
  },

  async getQueue() {
    const database = await dbPromise;
    return database.getAll("sync-queue");
  },

  async dequeue(id: number) {
    const database = await dbPromise;
    await database.delete("sync-queue", id);
  },

  async clearQueue() {
    const database = await dbPromise;
    await database.clear("sync-queue");
  },

  async getQueueCount(): Promise<number> {
    const database = await dbPromise;
    return database.count("sync-queue");
  },
};
