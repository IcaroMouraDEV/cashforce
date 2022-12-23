module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      tax: { type: Sequelize.STRING, allowNull: false },
      tariff: { type: Sequelize.STRING, allowNull: false },
      adValorem: { type: Sequelize.STRING, allowNull: false },
      float: { type: Sequelize.STRING, allowNull: false },
      iof: { type: Sequelize.STRING, allowNull: false },
      expiresIn: { type: Sequelize.DATE, allowNull: false },
      paymentStatusSponsor: { type: Sequelize.BOOLEAN, defaultValue: false },
      paymentStatusProvider: { type: Sequelize.BOOLEAN, defaultValue: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      orderId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'orders',
          key: 'id',
        }
      },
      providerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'providers',
          key: 'id',
        }
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('offers');
  },
};
