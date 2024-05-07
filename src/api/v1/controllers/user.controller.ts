import { Request, Response } from 'express';
import { handleError, logError, logInfo } from '../helpers/helper';
import { UserService } from '../services';
import IUser from '../interfaces/user.interface';
import { comparePasswords } from '../helpers/auth.helper';
import bcrypt from 'bcryptjs';


export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: string = req.params.id;
        const user = await UserService.getUserById(userId);

        const userWithoutPassword = { ...user.toObject(), password: undefined };
        
        res.status(200).json({
            status: 'success',
            message: logInfo('Successfully get the user'),
            data: userWithoutPassword,
        });

    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: string = req.params.id;
        const updatedData: IUser = { ...req.body };        

        const user = await UserService.updateUserById(userId, updatedData);

        const userWithoutPassword = { ...user.toObject(), password: undefined };

        res.status(200).json({
            status: 'success',
            message: logInfo('Successfully updated the user'),
            data: userWithoutPassword,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const updateUserPasswordController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: string = req.params.id;
        const user = await UserService.getUserById(userId);
        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword) {
            res.status(500).send({
                success: false,
                message: 'Please provide old or new password.',
            });
        };

        const isMatch = await comparePasswords(oldPassword, user.password);
        
        if (!isMatch) {
            res.status(500).send({
                success: false, 
                message: logError('Invalid old password'),
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = await bcrypt.hash(newPassword, salt);
        user.password = hashPass;
        await user.save();
        res.status(201).send({
            success: true,
            message: 'Password updated.'
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const resetUserPasswordController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: string = req.params.id;
        const user = await UserService.getUserById(userId);
        const { email, newPassword, answer } = req.body;

        if (!email || !newPassword || !answer) {
            res.status(500).send({
                success: false,
                message: 'Please provide all fields.',
            });
        };
        
        if (!user) {
            res.status(500).send({
                success: false,
                message: 'User not found or invalid answer.',
            });
        };

        const salt = bcrypt.genSaltSync(10);
        const hashPass = await bcrypt.hash(newPassword, salt);
        user.password = hashPass;
        await user.save();

        res.status(500).send({
            success: true,
            message: 'Password reset successfully.',
        })
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: string = req.params.id;
        const user = await UserService.deleteUserById(userId);
        if (!user) {
            res.status(500).send({
                success: false,
                message: 'User not found',
            })
        }

        res.status(200).send({
            success: true,
            message: 'User successfully deleted.'
        })

    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}