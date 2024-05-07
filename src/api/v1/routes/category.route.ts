import express from 'express';
import { CatController } from '../controllers/';

const categoryRouter = express.Router();

categoryRouter.post('/', CatController.createCategoryController);
categoryRouter.get('/', CatController.getAllCategoryController);
categoryRouter.get('/:id', CatController.getCategoryByIdController);
categoryRouter.put('/:id', CatController.updateCategoryByIdController);
categoryRouter.delete('/:id', CatController.deleteCategoryByIdController);

export default categoryRouter;