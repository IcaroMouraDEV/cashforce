module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('buyers', [
      {
        id: 1,
        name: 'SACADO 001',
        tradingName: 'SACADO 001 LTDA',
        cashforceTax: '0',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 1,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('buyers', null, {});
  },
};
