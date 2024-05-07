import { findUserByEmail } from "../helpers/auth.helper";
import { handleError, logError } from "../helpers/helper";
import IUser from "../interfaces/user.interface";
import User from "../models/user.model";

export const register = async (userData: Partial<IUser>): Promise<IUser> => {
    try {
        const newUser = await User.create(userData);

        return newUser;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to register user', 500);
    }
}

export const login = async (userData: Partial<IUser>): Promise<IUser> => {
    try {
        const email = userData.email;
        const user = await findUserByEmail(email as string);
        
        return user;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to login user', 500);
    }
}