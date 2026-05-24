import api from "../services/api";
import { db } from "./db";

let isSyncing = false;

export const sync = {
  enqueue(url: string, method: string, body?: any) {
    return db.enqueue({ url, method, body });
  },

  async processQueryClient(): Promise<void> {
    // This would need access to the query client, which we don't have here
    // We'll handle this differently - by having components refetch periodically
    // or by using a different approach
    return;
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
      
      // Note: We can't directly invalidate queries from here because we don't have access to the query client
      // In a production app, we might use an event emitter or other communication mechanism
      // For now, we'll rely on periodic refetching or manual refresh
    } finally {
      isSyncing = false;
    }
  },
};
