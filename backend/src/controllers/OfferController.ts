import { Request, Response } from 'express';
import OfferService from '../services/OfferService';

export default class OfferController {
  static async getAll(_req: Request, res: Response) {
    const offers = await OfferService.getAll();

    res.status(200).json(offers);
  }
}
