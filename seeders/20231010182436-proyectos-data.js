'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Proyectos', [
      {
        idProyecto: 'PR1',
        nombre: "Proyecto 1",
        descripcion: "Es el primer proyecto",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        idProyecto: 'PR2',
        nombre: "Proyecto 2",
        descripcion: "Es el segundo proyecto",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        idProyecto: 'PR3',
        nombre: "Proyecto 3",
        descripcion: "Es el tercer proyecto",
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
