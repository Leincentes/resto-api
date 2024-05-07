import { Request, Response } from "express"
import IUser from "../interfaces/user.interface";
import { AuthService } from "../services";
import User from "../models/user.model";
import { handleError, logInfo } from "../helpers/helper";
import bcrypt from 'bcryptjs';
import { comparePasswords, generateAuthToken, validateUserInput } from "../helpers/auth.helper";

export const registerController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData: IUser = req.body;

        const email = userData.email;
        const existing = await User.findOne({ email });
        if (existing) {
            res.status(500).send({
                success: false,
                message: "Email already exist",
            })
        }
        
        const salt = bcrypt.genSaltSync(10);
        const hashPass = await bcrypt.hash(userData.password, salt);

        userData.password = hashPass;

        const newUserData = await AuthService.register(userData);

        const userWithoutPassword = { ...newUserData.toObject(), password: undefined };

        res.status(201).json({
            status: 'success',
            message: logInfo('User successfully created'),
            data: userWithoutPassword,
        })
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const loginController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password }: IUser = req.body;

        await validateUserInput(email, password);
        
        const user = await AuthService.login({ email });

        await comparePasswords(password, user.password);

        const token = generateAuthToken(user._id);

        const userWithoutPassword = { ...user.toObject(), password: undefined };

        res.status(200).send({
            success: true,
            message: logInfo('Login successful'),
            token,
            user: userWithoutPassword,
          });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}