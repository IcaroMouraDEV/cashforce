import { Request, Response } from 'express';
import CNPJService from '../services/CNPJService';

export default class CNPJController {
  static async getAll(_req: Request, res: Response) {
    const leaderboard = await CNPJService.getAll();

    res.status(200).json(leaderboard);
  }
}
