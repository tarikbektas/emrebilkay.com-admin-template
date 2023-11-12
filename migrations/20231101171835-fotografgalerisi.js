'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('fotografgalerises', 'id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    });
    await queryInterface.addColumn('fotografgalerises', 'fotografgalerisi_sira', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('fotografgalerises', 'fotografgalerisi_url', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('fotografgalerises', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });

    await queryInterface.addColumn('fotografgalerises', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('fotografgalerises', 'id');
    await queryInterface.removeColumn('fotografgalerises', 'fotografgalerisi_sira');
    await queryInterface.removeColumn('fotografgalerises', 'fotografgalerisi_url');
    await queryInterface.removeColumn('fotografgalerises', 'createdAt');
    await queryInterface.removeColumn('fotografgalerises', 'updatedAt');

  }
};
