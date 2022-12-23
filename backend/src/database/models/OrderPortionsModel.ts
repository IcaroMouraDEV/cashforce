import { DataTypes, Model } from 'sequelize';
import db from '.';
import CNPJModel from './CNPJModel';
// import OtherModel from './OtherModel';

class OrderPortionModel extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare nDup: string;
  declare dVenc: string;
  declare vDup: string;
  declare availableToMarket: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare orderId: number;
}

OrderPortionModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  nDup: { type: DataTypes.STRING, allowNull: false },
  dVenc: { type: DataTypes.STRING, allowNull: false },
  vDup: { type: DataTypes.STRING, allowNull: false },
  availableToMarket: { type: DataTypes.BOOLEAN, defaultValue: true },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
  orderId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'orders',
      key: 'id',
    },
  },
}, {
  tableName: 'orderportions',
  underscored: false,
  sequelize: db,
  timestamps: true,
});

CNPJModel.hasMany(OrderPortionModel, { foreignKey: 'cnpjId' });

OrderPortionModel.belongsTo(CNPJModel, { foreignKey: 'cnpjId', as: 'cnpj' });

export default OrderPortionModel;
