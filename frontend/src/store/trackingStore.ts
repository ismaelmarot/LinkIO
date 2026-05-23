import { create } from "zustand";
import { calculateDistance, calculateSpeed } from "../utils/geo";

export type TrackingStatus = "idle" | "tracking" | "paused";

export interface GPSPoint {
  latitude: number;
  longitude: number;
  altitude: number | null;
  speed: number | null;
  timestamp: number;
}

interface TrackingMetrics {
  distance: number;
  duration: number;
  avgSpeed: number;
  maxSpeed: number;
}

interface TrackingState {
  status: TrackingStatus;
  path: GPSPoint[];
  startTime: number | null;
  pauseStart: number | null;
  totalPaused: number;
  metrics: TrackingMetrics;

  startTracking: (lat: number, lng: number, alt: number | null) => void;
  pauseTracking: () => void;
  resumeTracking: (lat: number, lng: number, alt: number | null) => void;
  stopTracking: () => void;
  addPoint: (lat: number, lng: number, alt: number | null, speed: number | null) => void;
}

export const useTrackingStore = create<TrackingState>((set, get) => ({
  status: "idle",
  path: [],
  startTime: null,
  pauseStart: null,
  totalPaused: 0,
  metrics: { distance: 0, duration: 0, avgSpeed: 0, maxSpeed: 0 },

  startTracking: (lat, lng, alt) => {
    const point: GPSPoint = {
      latitude: lat,
      longitude: lng,
      altitude: alt,
      speed: 0,
      timestamp: Date.now(),
    };
    set({
      status: "tracking",
      path: [point],
      startTime: Date.now(),
      totalPaused: 0,
      pauseStart: null,
      metrics: { distance: 0, duration: 0, avgSpeed: 0, maxSpeed: 0 },
    });
  },

  pauseTracking: () => {
    set({ status: "paused", pauseStart: Date.now() });
  },

  resumeTracking: (lat, lng, alt) => {
    const state = get();
    const pausedDuration = state.pauseStart ? Date.now() - state.pauseStart : 0;
    const point: GPSPoint = {
      latitude: lat,
      longitude: lng,
      altitude: alt,
      speed: 0,
      timestamp: Date.now(),
    };
    set({
      status: "tracking",
      pauseStart: null,
      totalPaused: state.totalPaused + pausedDuration,
      path: [...state.path, point],
    });
  },

  stopTracking: () => {
    set({
      status: "idle",
      path: [],
      startTime: null,
      pauseStart: null,
      totalPaused: 0,
      metrics: { distance: 0, duration: 0, avgSpeed: 0, maxSpeed: 0 },
    });
  },

  addPoint: (lat, lng, alt, speed) => {
    const state = get();
    if (state.status !== "tracking") return;

    const prev = state.path[state.path.length - 1];
    const segDistance = calculateDistance(prev.latitude, prev.longitude, lat, lng);
    const newDistance = state.metrics.distance + segDistance;
    const now = Date.now();
    const activeDuration = now - state.startTime! - state.totalPaused;
    const avgSpeed = calculateSpeed(newDistance, activeDuration);
    const maxSpeed = Math.max(state.metrics.maxSpeed, speed || 0);

    const point: GPSPoint = {
      latitude: lat,
      longitude: lng,
      altitude: alt,
      speed,
      timestamp: now,
    };

    set({
      path: [...state.path, point],
      metrics: {
        distance: newDistance,
        duration: activeDuration,
        avgSpeed,
        maxSpeed,
      },
    });
  },
}));
