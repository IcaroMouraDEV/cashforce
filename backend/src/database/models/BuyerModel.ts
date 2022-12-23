import { DataTypes, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class BuyerModel extends Model {
  // declare <campo>: <tipo>;
  declare name: string;
  declare tradingName: string;
  declare cashforceTax: string;
  declare responsibleName: string;
  declare responsibleEmail: string;
  declare responsiblePosition: string;
  declare responsiblePhone: string;
  declare responsibleMobile: string;
  declare website: string;
  declare postalCode: string;
  declare address: string;
  declare number: string;
  declare complement: string;
  declare neighborhood: string;
  declare city: string;
  declare state: string;
  declare phoneNumber: string;
  declare situation: string;
  declare situationDate: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cnpjId: number;
  declare confirm: boolean;
  declare email: string;
}

BuyerModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    // autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  tradingName: { type: DataTypes.STRING, defaultValue: null },
  cashforceTax: { type: DataTypes.STRING, defaultValue: null },
  responsibleName: { type: DataTypes.STRING, defaultValue: null },
  responsibleEmail: { type: DataTypes.STRING, defaultValue: null },
  responsiblePosition: { type: DataTypes.STRING, defaultValue: null },
  responsiblePhone: { type: DataTypes.STRING, defaultValue: null },
  responsibleMobile: { type: DataTypes.STRING, defaultValue: null },
  website: { type: DataTypes.STRING, defaultValue: null },
  postalCode: { type: DataTypes.STRING, defaultValue: null },
  address: { type: DataTypes.STRING, defaultValue: null },
  number: { type: DataTypes.STRING, defaultValue: null },
  complement: { type: DataTypes.STRING, defaultValue: null },
  neighborhood: { type: DataTypes.STRING, defaultValue: null },
  city: { type: DataTypes.STRING, defaultValue: null },
  state: { type: DataTypes.STRING, defaultValue: null },
  phoneNumber: { type: DataTypes.STRING, defaultValue: null },
  situation: { type: DataTypes.STRING, defaultValue: null },
  situationDate: { type: DataTypes.STRING, defaultValue: null },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
  cnpjId: { type: DataTypes.INTEGER, defaultValue: null },
  confirm: { type: DataTypes.BOOLEAN, defaultValue: true },
  email: { type: DataTypes.STRING, defaultValue: null },
}, {
  tableName: 'buyers',
  underscored: false,
  sequelize: db,
  timestamps: true,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(BuyerModel, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(BuyerModel, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// BuyerModel.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// BuyerModel.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default BuyerModel;
