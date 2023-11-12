'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('images', 'id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    });
    await queryInterface.addColumn('images', 'image1', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('images', 'image2', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('images', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });

    await queryInterface.addColumn('images', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('images', 'id');
    await queryInterface.removeColumn('images', 'image1');
    await queryInterface.removeColumn('images', 'image2');
    await queryInterface.removeColumn('images', 'createdAt');
    await queryInterface.removeColumn('images', 'updatedAt');

  }
};
