import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import { handleError, logError } from '../helpers/helper';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            res.status(401).send({
                success: false,
                message: 'Authorization header is missing',
            });
            return;
        }

        const token = authorizationHeader.split(' ')[1];

        JWT.verify(token, process.env.JWT_SECRET as string, (err:  any, decode: any) => {
            if (err) {
                res.status(401).send({
                    success: false,
                    message: 'Unauthorized User',
                });
            } else {
                req.body.id = decode.userId;
                next();
            }
        })

    } catch (error: any) {
        logError(error.message);
        throw handleError('Please provide authentication token.', 500);
    }
}