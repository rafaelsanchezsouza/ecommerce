import { Router } from 'express';
import OrderControllers from './controllers/OrderControllers';

const routes = Router();

routes.post('/order', OrderControllers.create);
routes.get('/order', OrderControllers.index);
routes.get('/order/:id', OrderControllers.show);

export default routes;
