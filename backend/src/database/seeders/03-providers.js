module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('providers', [
      {
        id: 1,
        name: 'CEDENTE 002',
        tradingName: 'CEDENTE 002 LTDA',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 2,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('providers', null, {});
  },
};
