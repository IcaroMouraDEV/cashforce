import * as express from 'express';
import orderRouter from './orderRouter';

const router = express();

router.use('/orders', orderRouter);

export default router;
