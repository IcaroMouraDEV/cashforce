export default interface IOffer {
  id: number;
  orderNfId: string;
  orderNumber: string;
  orderPath: string;
  orderFileName: string;
  orderOriginalName: string;
  emissionDate: string;
  pdfFile: string;
  emitedTo: string;
  nNf: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CTE: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
  cnpjId: number;
  userId: number;
  buyerId: number;
  providerId: number;
  orderStatusBuyer: string;
  orderStatusProvider: string;
  deliveryReceipt: string;
  cargoPackingList: string;
  deliveryCtrc: string;
}
