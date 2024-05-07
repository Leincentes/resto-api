import mongoose, { Schema } from "mongoose";
import { IRestuarant } from "../interfaces/restaurant.interface";

const restaurantSchema: Schema = new Schema<IRestuarant>({
    title: {
        type: String,
        required: [true, "Restaurant title is required"],
    },
    imageUrl: String,
    foods: [String],
    time: String,
    pickup: {
        type: Boolean,
        default: true,
    },
    delivery: {
        type: Boolean,
        default: true,
    },
    isOpen: {
        type: Boolean,
        default: true,
    },
    logoUrl: String,
    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5,
    },
    ratingCount: String,
    code: String,
    coords: {
        id: String,
        latitude: Number,
        latitudeDelta: Number,
        longitude: Number,
        longitudeDelta: Number,
        address: String,
        title: String,
    },
}, { timestamps: true });

const Restaurant = mongoose.model<IRestuarant>('Restaurant', restaurantSchema);

export default Restaurant;