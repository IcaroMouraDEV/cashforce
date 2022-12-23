export default interface IOffer {
  id: number;
  tax: string;
  tariff: string;
  adValorem: string;
  float: string;
  iof: string;
  expiresIn: Date;
  paymentStatusSponsor: boolean;
  paymentStatusProvider: boolean;
  createdAt: Date;
  updatedAt: Date;
  orderId: number;
  providerId: number;
}
