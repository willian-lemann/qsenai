import express from 'express';
const routes = express.Router();

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/points', pointsController.Index);
routes.get('/points/:id', pointsController.Show);
routes.post('/points', pointsController.Create);

routes.get('/items', itemsController.Index)


export default routes;