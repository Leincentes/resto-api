import express from 'express';
import { AuthController } from '../controllers';

const authRouter = express.Router();

authRouter.post('/register', AuthController.registerController);
authRouter.post('/login', AuthController.loginController);

export default authRouter;