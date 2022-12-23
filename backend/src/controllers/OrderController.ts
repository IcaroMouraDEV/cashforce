import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  static async getAll(_req: Request, res: Response) {
    const orders = await OrderService.getAll();

    res.status(200).json(orders);
  }
}
