'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Propietarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Personas',
          key: 'id'
        } 
      },
      propiedadId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Propiedades',
          key: 'id'
        } 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Propietarios');
  }
};