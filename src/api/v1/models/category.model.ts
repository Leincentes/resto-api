import mongoose, { Schema } from 'mongoose';
import { ICategory } from '../interfaces/category.interface';

const categorySchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: String,
}, { timestamps: true });

const Category = mongoose.model<ICategory>('Category', categorySchema);

export default Category;