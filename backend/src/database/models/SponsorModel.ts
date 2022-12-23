import { DataTypes, Model } from 'sequelize';
import db from '.';
import CNPJModel from './CNPJModel';
// import OtherModel from './OtherModel';

class SponsorModel extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
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
  declare bank: string;
  declare bankAgency: string;
  declare account: string;
  declare documents: string;
  declare phoneNumber: string;
  declare situation: string;
  declare situationDate: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cnpjId: number;
  declare confirm: boolean;
  declare email: string;
}

SponsorModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
  bank: { type: DataTypes.STRING, defaultValue: null },
  bankAgency: { type: DataTypes.STRING, defaultValue: null },
  account: { type: DataTypes.STRING, defaultValue: null },
  documents: { type: DataTypes.STRING, defaultValue: null },
  phoneNumber: { type: DataTypes.STRING, defaultValue: null },
  situation: { type: DataTypes.STRING, defaultValue: null },
  situationDate: { type: DataTypes.STRING, defaultValue: null },
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
  confirm: { type: DataTypes.BOOLEAN, defaultValue: true },
  email: { type: DataTypes.STRING, defaultValue: null },
}, {
  tableName: 'sponsors',
  underscored: false,
  sequelize: db,
  timestamps: true,
});

CNPJModel.hasMany(SponsorModel, { foreignKey: 'cnpjId' });

SponsorModel.belongsTo(CNPJModel, { foreignKey: 'cnpjId', as: 'cnpj' });

export default SponsorModel;
