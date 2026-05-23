import api from "../services/api";
import { db } from "./db";

let isSyncing = false;

export const sync = {
  enqueue(url: string, method: string, body?: any) {
    return db.enqueue({ url, method, body });
  },

  async processQueue() {
    if (isSyncing) return;
    isSyncing = true;

    try {
      const queue = await db.getQueue();

      for (const item of queue) {
        try {
          await api({
            method: item.method as any,
            url: item.url,
            data: item.body,
          });
          await db.dequeue(item.id as number);
        } catch {
          break;
        }
      }
    } finally {
      isSyncing = false;
    }
  },
};
