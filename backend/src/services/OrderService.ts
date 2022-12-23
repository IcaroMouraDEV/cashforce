import OrderModel from '../database/models/OrderModel';
import IOrder from '../interfaces/IOrder';

export default class OrderService {
  static async getAll() {
    const Orders: IOrder[] = await OrderModel.findAll({
      include: {
        all: true,
        attributes: {
          exclude: ['id'],
        },
      },
    });

    return Orders;
  }
}
