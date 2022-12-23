module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('cnpjs', [
      {
        id: 1,
        cnpj: '00000000000001',
        companyType: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        cnpj: '00000000000002',
        companyType: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cnpjs', null, {});
  },
};
