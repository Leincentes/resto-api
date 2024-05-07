import { handleError, logError } from "../helpers/helper";
import IFood from "../interfaces/food.interface"
import Food from "../models/food.model"


export const createFood = async (foodData: Partial<IFood>): Promise<IFood> => {
    try {
        const food = await Food.create(foodData);

        return food;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to create food', 500);
    }
}

export const getAllFood = async () => {
    try {
        const foods = await Food.find();
        if (foods.length === 0) {
            logError('No foods found.');
        }
        
        return foods;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to fetch all food', 500);
    }
}

export const getFoodById = async (foodId: string): Promise<IFood> => {
    try {
        const food = await Food.findById(foodId);
        if (!food) {
            throw new Error('Food not found.');
        }

        return food;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to fetch food', 500);
    }
}

export const updateFoodById = async (foodId: string, updateData: Partial<IFood>): Promise<IFood> => {
    try {
        const food = await Food.findByIdAndUpdate(foodId, updateData);
        if (!food) {
            throw new Error('Food not found.');
        }
        
        return food;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to update food', 500);
    }
}

export const deleteFoodById = async (foodId: string): Promise<IFood> => {
    try {
        const food = await Food.findByIdAndDelete(foodId);
        if (!food) {
            throw new Error('Food not found.');
        }

        return food;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to delete food', 500);
    }
}