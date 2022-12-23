module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cnpjs', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      cnpj: { type: Sequelize.STRING, allowNull: false, unique: true },
      companyType: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('cnpjs');
  },
};
