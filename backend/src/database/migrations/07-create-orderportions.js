module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      nDup: { type: Sequelize.STRING, allowNull: false },
      dVenc: { type: Sequelize.STRING, allowNull: false },
      vDup: { type: Sequelize.STRING, allowNull: false },
      availableToMarket: { type: Sequelize.BOOLEAN, defaultValue: true },
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
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('orderportions');
  },
};
