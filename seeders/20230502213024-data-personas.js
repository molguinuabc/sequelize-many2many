'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
    */
    await queryInterface.bulkInsert('Personas', [
      {
        rfc: 'rfc1',
        nombre: "Juan Polainas",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        rfc: 'rfc2',
        nombre: "Juana Polainas",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
