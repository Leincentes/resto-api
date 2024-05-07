import { Response } from "express";

// Error helper
export const handleError = (message: string, statusCode: number): Error => {
    const error = new Error(message);
    (error as any).statusCode = statusCode;
    return error;
}

// Response helper
export const sendResponse = (res: Response, statusCode: number, message: string, data?: any): Response => {
    return res.status(statusCode).json({
        status: 'success',
        statusCode,
        message,
        data,
    })
}

// Logging info helper
export const logInfo = (message: string): void => {
    console.log(`[INFO] ${message}`);
}

// Logging error
export const logError = (message: string): void => {
    console.error(`[ERROR] ${message}`);
};
