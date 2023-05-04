'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */
     await queryInterface.bulkInsert('Propiedades', [
      {
        cve_catastral: 'QW003001',
        descripcion: "casa blanca",
        direccion: "Conocida", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        cve_catastral: 'QW003002',
        descripcion: "casa blanca",
        direccion: "Conocida", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        cve_catastral: 'QW003003',
        descripcion: "casa blanca",
        direccion: "Conocida", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        cve_catastral: 'QW003004',
        descripcion: "casa blanca",
        direccion: "Conocida", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        cve_catastral: 'QW003005',
        descripcion: "casa blanca",
        direccion: "Conocida", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        cve_catastral: 'QW003006',
        descripcion: "casa blanca",
        direccion: "Conocida", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        cve_catastral: 'QW003007',
        descripcion: "casa blanca",
        direccion: "Conocida", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
    ], {});
    
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
