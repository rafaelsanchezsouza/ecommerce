import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrderControllers from './controllers/OrderControllers';
import ProductControllers from './controllers/ProductControllers';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/order', OrderControllers.create);
routes.get('/order', OrderControllers.index);
routes.get('/order/:id', OrderControllers.show);

routes.post('/products', ProductControllers.create);
routes.get('/products', ProductControllers.index);
routes.get('/products/:id', ProductControllers.show);

export default routes;
