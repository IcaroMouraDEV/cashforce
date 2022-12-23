import { DataTypes, Model } from 'sequelize';
import db from '.';
import BuyerModel from './BuyerModel';
import CNPJModel from './CNPJModel';
import ProviderModel from './ProviderModel';
import UserModel from './UserModel';
// import OtherModel from './OtherModel';

class OrderModel extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare orderNfId: string;
  declare orderNumber: string;
  declare orderPath: string;
  declare orderFileName: string;
  declare orderOriginalName: string;
  declare emissionDate: string;
  declare pdfFile: string;
  declare emitedTo: string;
  declare nNf: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  declare CTE: string;
  declare value: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cnpjId: number;
  declare userId: number;
  declare buyerId: number;
  declare providerId: number;
  declare orderStatusBuyer: string;
  declare orderStatusProvider: string;
  declare deliveryReceipt: string;
  declare cargoPackingList: string;
  declare deliveryCtrc: string;
}

OrderModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  orderNfId: { type: DataTypes.STRING, allowNull: false, unique: true },
  orderNumber: { type: DataTypes.STRING, allowNull: false },
  orderPath: { type: DataTypes.STRING, defaultValue: null, unique: true },
  orderFileName: { type: DataTypes.STRING, defaultValue: null, unique: true },
  orderOriginalName: { type: DataTypes.STRING, defaultValue: null, unique: true },
  emissionDate: { type: DataTypes.STRING, defaultValue: null },
  pdfFile: { type: DataTypes.STRING, defaultValue: null },
  emitedTo: { type: DataTypes.STRING, allowNull: false },
  nNf: { type: DataTypes.STRING, defaultValue: null },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CTE: { type: DataTypes.STRING, defaultValue: null },
  value: { type: DataTypes.STRING, defaultValue: null },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
  cnpjId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'cnpjs',
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'users',
      key: 'id',
    },
  },
  buyerId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'buyers',
      key: 'id',
    },
  },
  providerId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'providers',
      key: 'id',
    },
  },
  orderStatusBuyer: { type: DataTypes.STRING, defaultValue: '0' },
  orderStatusProvider: { type: DataTypes.STRING, defaultValue: '0' },
  deliveryReceipt: { type: DataTypes.STRING, defaultValue: null },
  cargoPackingList: { type: DataTypes.STRING, defaultValue: null },
  deliveryCtrc: { type: DataTypes.STRING, defaultValue: null },
}, {
  tableName: 'orders',
  underscored: false,
  sequelize: db,
  timestamps: true,
});

CNPJModel.hasMany(OrderModel, { foreignKey: 'cnpjId' });
UserModel.hasMany(OrderModel, { foreignKey: 'userId' });
BuyerModel.hasMany(OrderModel, { foreignKey: 'buyerId' });
ProviderModel.hasMany(OrderModel, { foreignKey: 'providerId' });

OrderModel.belongsTo(CNPJModel, { foreignKey: 'cnpjId', as: 'cnpj' });
OrderModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
OrderModel.belongsTo(BuyerModel, { foreignKey: 'buyerId', as: 'buyer' });
OrderModel.belongsTo(ProviderModel, { foreignKey: 'providerId', as: 'provider' });

export default OrderModel;
