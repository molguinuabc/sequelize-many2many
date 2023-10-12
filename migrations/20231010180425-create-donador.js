'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Donadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProyectoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Proyectos',
          key: 'id'

        }
      },
      PersonaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Personas',
          key: 'id'

        }
      },
      cantidad: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Donadores');
  }
};