import mongoose, { Schema } from 'mongoose';
import IFood from '../interfaces/food.interface';

const foodSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: String,
    foodTags: [String],
    category: String,
    code: String,
    isAvailable: {
        type: Boolean,
        default: true,
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    rating: Number,
}, { timestamps: true });

const Food = mongoose.model<IFood>('Food', foodSchema);

export default Food;