import { DataTypes, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class OfferModel extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare tax: string;
  declare tariff: string;
  declare adValorem: string;
  declare float: string;
  declare iof: string;
  declare expiresIn: Date;
  declare paymentStatusSponsor: boolean;
  declare paymentStatusProvider: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare orderId: number;
  declare providerId: number;
}

OfferModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  tax: { type: DataTypes.STRING, allowNull: false },
  tariff: { type: DataTypes.STRING, allowNull: false },
  adValorem: { type: DataTypes.STRING, allowNull: false },
  float: { type: DataTypes.STRING, allowNull: false },
  iof: { type: DataTypes.STRING, allowNull: false },
  expiresIn: { type: DataTypes.DATE, allowNull: false },
  paymentStatusSponsor: { type: DataTypes.BOOLEAN, defaultValue: false },
  paymentStatusProvider: { type: DataTypes.BOOLEAN, defaultValue: false },
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
}, {
  tableName: 'offers',
  underscored: false,
  sequelize: db,
  timestamps: true,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(OfferModel, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(OfferModel, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// OfferModel.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// OfferModel.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default OfferModel;
