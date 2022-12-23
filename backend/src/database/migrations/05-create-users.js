module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, defaultValue: null, unique: true },
      phoneNumber: { type: Sequelize.STRING, defaultValue: null },
      mobile: { type: Sequelize.STRING, defaultValue: null },
      departament: { type: Sequelize.STRING, defaultValue: null },
      verificationCode: { type: Sequelize.STRING, defaultValue: null },
      emailChecked: { type: Sequelize.BOOLEAN, defaultValue: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      cashforceAdm: { type: Sequelize.BOOLEAN, defaultValue: false },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
