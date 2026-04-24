import type { Tag } from './tag.interface'

export interface LinkCardProps {
    imageUrl?: string;
    title: string;
    url: string;
    iconUrl?: string;
    tags: Tag[] | string[];
    id: number;
}