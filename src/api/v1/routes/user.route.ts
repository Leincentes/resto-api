import express from 'express';
import { UserController } from '../controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const userRouter = express.Router();

userRouter.get('/:id', authMiddleware, UserController.getUserByIdController);
userRouter.put('/:id', authMiddleware, UserController.updateUserController);
userRouter.put('/update-password/:id', authMiddleware, UserController.updateUserPasswordController);
userRouter.put('/reset-password/:id', authMiddleware, UserController.resetUserPasswordController);
userRouter.delete('/:id', authMiddleware, UserController.deleteUserController);

export default userRouter;