import { handleError, logError } from "../helpers/helper";
import { IRestuarant } from "../interfaces/restaurant.interface";
import Restaurant from "../models/restaurant.model";


export const createRestaurant = async (restaurantData: Partial<IRestuarant>): Promise<IRestuarant> => {
    try {
        const newResto = await Restaurant.create(restaurantData);

        return newResto;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to create restaurant', 500);
    }
}

export const getAllRestaurant = async () => {
    try {
        const restos = await Restaurant.find();
        if (restos.length === 0) {
            logError('No restaurants found.');
        }

        return restos;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to fetch all restaurants', 500);
    }
}


export const getRestaurantById = async (restoId: string): Promise<IRestuarant> => {
    try {
        const resto = await Restaurant.findById(restoId);
        if (!resto) {
            throw new Error('Resto not found.');
        }

        return resto;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to fetch restaurant', 500);
    }
}

export const updateRestaurantById = async (restoId: string, updateData: Partial<IRestuarant>): Promise<IRestuarant> => {
    try {
        const updatedResto = await Restaurant.findByIdAndUpdate(restoId, updateData);
        if (!updatedResto) {
            throw new Error('Resto not found, failed update.');
        }

        return updatedResto;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to update restaurant', 500);
    }
}

export const deleteRestaurantById = async (restoId: string): Promise<IRestuarant> => {
    try {
        const deletedResto = await Restaurant.findByIdAndDelete(restoId);
        if (!deletedResto) {
            throw new Error('Resto not found, failed delete.')
        }
        
        return deletedResto;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to delete restaurant', 500);
    }
}