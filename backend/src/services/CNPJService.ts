import CNPJModel from '../database/models/CNPJModel';
import ICNPJ from '../interfaces/ICNPJ';

export default class CNPJService {
  static async getAll() {
    const cnpjs: ICNPJ[] = await CNPJModel.findAll({
      include: {
        all: true,
        attributes: {
          exclude: ['id'],
        },
      },
    });

    return cnpjs;
  }
}
