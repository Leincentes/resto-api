import express from 'express';
import userRouter from './user.route';
import authRouter from './auth.route';
import restoRouter from './restaurant.route';
import foodRouter from './food.route';
import categoryRouter from './category.route';

const router = express.Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/restaurant', restoRouter);
router.use('/food', foodRouter);
router.use('/category', categoryRouter);

export default router;