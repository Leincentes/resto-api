import { Document } from "mongoose";

interface ICategory extends Document {
    title: string,
    imageUrl?: string,
}

export { ICategory };