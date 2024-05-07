import express from 'express';
import { FoodController } from '../controllers';

const foodRouter = express.Router();

foodRouter.post('/', FoodController.createFoodController);
foodRouter.get('/', FoodController.getAllFoodController);
foodRouter.get('/:id', FoodController.getFoodByIdController);
foodRouter.put('/:id', FoodController.updateFoodByIdController);
foodRouter.delete('/:id', FoodController.deleteFoodByIdController);

export default foodRouter;