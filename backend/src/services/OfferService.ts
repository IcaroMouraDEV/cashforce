import OfferModel from '../database/models/OfferModel';
import IOffer from '../interfaces/IOffer';

export default class OfferService {
  static async getAll() {
    const offers: IOffer[] = await OfferModel.findAll({
      include: {
        all: true,
        attributes: {
          exclude: ['id'],
        },
      },
    });

    return offers;
  }
}
