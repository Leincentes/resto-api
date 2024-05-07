import express from 'express';
import { RestoController } from '../controllers';

const restoRouter = express.Router();

restoRouter.post('/', RestoController.createRestaurantController);
restoRouter.get('/', RestoController.getAllRestaurantController);
restoRouter.get('/:id', RestoController.getRestaurantByIdController);
restoRouter.put('/:id', RestoController.updateRestaurantByIdController);
restoRouter.delete('/:id', RestoController.deleteRestaurantByIdController);

export default restoRouter;