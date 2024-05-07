import { ICategory } from "../interfaces/category.interface";
import Category from '../models/category.model';
import { handleError, logError } from "../helpers/helper";


export const createCategory = async (categoryData: Partial<ICategory>): Promise<ICategory> => {
    try {
        const category = await Category.create(categoryData);

        return category;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to create category', 500);
    }
}

export const getAllCategory = async () => {
    try {
        const categories = await Category.find();
        if (categories.length === 0) {
            logError('No category found.');
        }
        
        return categories;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to fetch all category', 500);
    }
}

export const getCategoryById = async (categoryId: string): Promise<ICategory> => {
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            throw new Error('Category not found.');
        }

        return category;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to fetch category', 500);
    }
}

export const updateCategoryById = async (categoryId: string, updateData: Partial<ICategory>): Promise<ICategory> => {
    try {
        const category = await Category.findByIdAndUpdate(categoryId, updateData);
        if (!category) {
            throw new Error('Category not found.');
        }
        
        return category;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to update category', 500);
    }
}

export const deleteCategoryById = async (categoryId: string): Promise<ICategory> => {
    try {
        const category = await Category.findByIdAndDelete(categoryId);
        if (!category) {
            throw new Error('Category not found.');
        }

        return category;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to delete category', 500);
    }
}