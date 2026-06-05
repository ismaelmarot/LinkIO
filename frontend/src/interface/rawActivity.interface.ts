export interface RawActivity {
    id: string;
    sportType: string;
    distance: number;
    duration: number;
    startTime: string;
    timestamp: string;
    avgSpeed: number;
    maxSpeed: number;
    points: Array<{
        latitude: number;
        longitude: number;
        altitude: number;
        speed: number;
        timestamp: string;
    }>;
}