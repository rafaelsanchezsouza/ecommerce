import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrderControllers from './controllers/OrderControllers';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/order', OrderControllers.create);
routes.get('/order', OrderControllers.index);
routes.get('/order/:id', OrderControllers.show);

// routes.post('/product', ProductControllers.create);
// routes.get('/product', ProductControllers.index);
// routes.get('/product/:id', ProductControllers.show);

export default routes;
