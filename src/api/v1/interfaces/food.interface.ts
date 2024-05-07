import { IRestuarant } from "./restaurant.interface";

interface IFood {
    title: string;
    description: string;
    price: number;
    imageUrl?: string;
    foodTags?: string[];
    category?: string;
    code?: string;
    isAvailable?: boolean;
    restaurant: IRestuarant['_id'];
    rating?: number;
}

export default IFood;
