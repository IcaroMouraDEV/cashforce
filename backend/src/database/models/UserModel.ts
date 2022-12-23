import { DataTypes, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class UserModel extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare name: string;
  declare email: string;
  declare phoneNumber: string;
  declare mobile: string;
  declare departament: string;
  declare verificationCode: string;
  declare emailChecked: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cashforceAdm: boolean;
}

UserModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, defaultValue: null, unique: true },
  phoneNumber: { type: DataTypes.STRING, defaultValue: null },
  mobile: { type: DataTypes.STRING, defaultValue: null },
  departament: { type: DataTypes.STRING, defaultValue: null },
  verificationCode: { type: DataTypes.STRING, defaultValue: null },
  emailChecked: { type: DataTypes.BOOLEAN, defaultValue: false },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
  cashforceAdm: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  tableName: 'users',
  underscored: false,
  sequelize: db,
  timestamps: true,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(UserModel, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(UserModel, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// UserModel.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// UserModel.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default UserModel;
