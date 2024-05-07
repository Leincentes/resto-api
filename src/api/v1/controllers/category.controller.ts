import { Request, Response } from "express";
import { handleError } from "../helpers/helper";
import { ICategory } from "../interfaces/category.interface";
import { CategoryService } from "../services";

export const createCategoryController = async (req: Request, res: Response): Promise<void> => {
    try {
        const categoryData: ICategory = req.body;
        const category = await CategoryService.createCategory(categoryData);

        res.status(200).json({
            status: 'success',
            message: 'Successfully created category.',
            data: category,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const getAllCategoryController = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await CategoryService.getAllCategory();

        if ((await categories).length === 0) {
            res.status(404).json({
                status: 'error',
                message: 'No categories found.',
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            message: 'Successfully fetch categories.',
            data: categories,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const getCategoryByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const categoryId: string = req.params.id;
        const category = await CategoryService.getCategoryById(categoryId);

        if (!category) {
            res.status(404).json({
                status: 'error',
                message: 'Category does not exist.',
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            message: 'Successfully fetch category.',
            data: category,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const updateCategoryByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const categoryId: string = req.params.id;
        const categoryData: ICategory = req.body;

        const category = await CategoryService.updateCategoryById(categoryId, categoryData);

        if (!category) {
            res.status(404).json({
                status: 'error',
                message: 'Category does not exist.',
            });
            return;
        }
        
        res.status(200).json({
            status: 'success',
            message: 'Successfully updated the category.',
            data: category,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const deleteCategoryByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const categoryId: string = req.params.id;

        const category = await CategoryService.deleteCategoryById(categoryId);

        if (!category) {
            res.status(404).json({
                status: 'error',
                message: 'Category does not exist.',
            });
            return;
        }
        
        res.status(200).json({
            status: 'success',
            message: 'Successfully deleted the category.',
            data: category,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}