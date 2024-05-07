import { Request, Response } from "express";
import IFood from "../interfaces/food.interface"
import { FoodService } from "../services";
import { handleError } from "../helpers/helper";


export const createFoodController = async (req: Request, res: Response): Promise<void> => {
    try {
        const foodData: IFood = req.body;
        const food = await FoodService.createFood(foodData);

        res.status(200).json({
            status: 'success',
            message: 'Successfully created food.',
            data: food,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const getAllFoodController = async (req: Request, res: Response): Promise<void> => {
    try {
        const foods = await FoodService.getAllFood();

        if ((await foods).length === 0) {
            res.status(404).json({
                status: 'error',
                message: 'No foods found.',
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            message: 'Successfully fetch foods.',
            data: foods,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const getFoodByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const foodId: string = req.params.id;
        const food = await FoodService.getFoodById(foodId);

        if (!food) {
            res.status(404).json({
                status: 'error',
                message: 'Food does not exist.',
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            message: 'Successfully fetch food.',
            data: food,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const updateFoodByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const foodId: string = req.params.id;
        const foodData: IFood = req.body;

        const food = await FoodService.updateFoodById(foodId, foodData);

        if (!food) {
            res.status(404).json({
                status: 'error',
                message: 'Food does not exist.',
            });
            return;
        }
        
        res.status(200).json({
            status: 'success',
            message: 'Successfully updated the food.',
            data: food,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const deleteFoodByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const foodId: string = req.params.id;

        const food = await FoodService.deleteFoodById(foodId);

        if (!food) {
            res.status(404).json({
                status: 'error',
                message: 'Food does not exist.',
            });
            return;
        }
        
        res.status(200).json({
            status: 'success',
            message: 'Successfully updated the food.',
            data: food,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}