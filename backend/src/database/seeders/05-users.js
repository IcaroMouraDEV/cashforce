module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        verificationCode: '',
        emailChecked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: true,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
