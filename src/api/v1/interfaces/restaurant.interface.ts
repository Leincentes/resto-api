import { Document } from 'mongoose';

interface ICoords {
    id?: string;
    latitude?: number;
    latitudeDelta?: number;
    longitude?: number;
    longitudeDelta?: number;
    address?: string;
    title?: string;
}

interface IRestuarant extends Document {
    title: string;
    imageUrl?: string;
    foods?: string[];
    time?: string;
    pickup?: boolean;
    delivery?: boolean;
    isOpen?: boolean;
    logoUrl?: string;
    rating: number;
    ratingCount?: string;
    code?: string;
    coords?: ICoords;
    createdAt: Date;
    updatedAt: Date;
}

export { IRestuarant, ICoords };
