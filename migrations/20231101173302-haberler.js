'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   genelayarlars
   await queryInterface.addColumn('haberlers', 'id', {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  });
  await queryInterface.addColumn('haberlers', 'title', {
    type: Sequelize.STRING,
    allowNull: true
  });
    await queryInterface.addColumn('haberlers', 'sira', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('haberlers', 'img', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('haberlers', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });

    await queryInterface.addColumn('haberlers', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('haberlers', 'id');
    await queryInterface.removeColumn('haberlers', 'title');
    await queryInterface.removeColumn('haberlers', 'sira');
    await queryInterface.removeColumn('haberlers', 'img');
    await queryInterface.removeColumn('haberlers', 'createdAt');
    await queryInterface.removeColumn('haberlers', 'updatedAt');
  }
};
