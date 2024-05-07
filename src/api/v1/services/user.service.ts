import { handleError, logError } from "../helpers/helper";
import IUser from "../interfaces/user.interface";
import User from "../models/user.model";

export const getUserById = async (userId: string): Promise<IUser> => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to fetch user', 500);
    }
}

export const updateUserById = async (userId: string, updateData: IUser): Promise<IUser> => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData);
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to update user', 500);
    }
}

export const deleteUserById = async (userId: string): Promise<IUser> => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return deletedUser;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to delete user', 500);
    }
}