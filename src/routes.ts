import { Router } from 'express';
import OrderControllers from './controllers/OrderControllers';

const routes = Router();

routes.post('/order', OrderControllers.create);

export default routes;
