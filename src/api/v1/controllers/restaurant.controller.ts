import { handleError } from "../helpers/helper";
import { Request, Response } from "express";
import { RestoService } from "../services";
import { IRestuarant } from "../interfaces/restaurant.interface";

export const createRestaurantController = async (req: Request, res: Response): Promise<void> => {
    try {
        const restoData: IRestuarant = req.body;
        const newResto = await RestoService.createRestaurant(restoData);
        
        res.status(200).json({
            status: 'success',
            message: 'Successfully created resto.',
            data: newResto,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const getAllRestaurantController = async (req: Request, res: Response): Promise<void> => {
    try {
        const restos = await RestoService.getAllRestaurant();

        if ((await restos).length === 0) {
            res.status(404).json({
                status: 'error',
                message: 'No restaurants found.',
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            message: 'Successfully get all restos.',
            data: restos,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const getRestaurantByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const restoId: string = req.params.id;
        const resto = await RestoService.getRestaurantById(restoId);

        if (!resto) {
            res.status(404).json({
                status: 'error',
                message: 'Resto does not exist.',
            });
            return;
        }
        
        res.status(200).json({
            status: 'success',
            message: 'Successfully get resto.',
            data: resto,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const updateRestaurantByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const restoId: string = req.params.id;
        const restoData: IRestuarant = req.body;

        const resto = await RestoService.updateRestaurantById(restoId, restoData);
        
        res.status(200).json({
            status: 'success',
            message: 'Successfully updated the resto.',
            data: resto,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const deleteRestaurantByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const restoId: string = req.params.id;
        const deletedResto = await RestoService.deleteRestaurantById(restoId);

        res.status(200).json({
            status: 'success',
            message: 'Successfully deleted the resto.',
            data: deletedResto,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}