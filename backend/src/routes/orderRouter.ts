import * as express from 'express';
import OrderController from '../controllers/OrderController';

const orderRouter = express();

orderRouter.use('', (req, res) => OrderController.getAll(req, res));

export default orderRouter;
