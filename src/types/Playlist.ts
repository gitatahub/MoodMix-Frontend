import type { Track } from "./Track";

export interface Playlist {
    id: number;
    name: string;
    description: string;
    tracks: Track[];
}