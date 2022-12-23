import { DataTypes, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class CNPJModel extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare cnpj: string;
  declare companyType: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

CNPJModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  cnpj: { type: DataTypes.STRING, allowNull: false, unique: true },
  companyType: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
}, {
  tableName: 'cnpjs',
  underscored: false,
  sequelize: db,
  timestamps: true,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(CNPJModel, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(CNPJModel, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// CNPJModel.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// CNPJModel.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default CNPJModel;
