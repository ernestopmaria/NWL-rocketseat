import express, { Request, Response } from 'express';

import PointsController from './controller/PointsCrontoller';
import ItemsController from './controller/itemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items' , itemsController.index);

routes.post('/points' , pointsController.create);

export default routes; 