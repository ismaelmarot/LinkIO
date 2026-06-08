export interface EventForm {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    latitude: number | null;
    longitude: number | null;
    photoUrl: string;
    isTemplate: boolean;
    route: Array<{ latitude: number; longitude: number }> | null;
    isDrawing: boolean;
}