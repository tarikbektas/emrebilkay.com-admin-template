'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   genelayarlars
   await queryInterface.addColumn('socialmedia', 'id', {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  });
  await queryInterface.addColumn('socialmedia', 'socialmedia_sira', {
    type: Sequelize.STRING,
    allowNull: true
  });
    await queryInterface.addColumn('socialmedia', 'socialmedia_logo', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('socialmedia', 'socialmedia_img', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('socialmedia', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });

    await queryInterface.addColumn('socialmedia', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('socialmedia', 'id');
    await queryInterface.removeColumn('socialmedia', 'socialmedia_sira');
    await queryInterface.removeColumn('socialmedia', 'socialmedia_logo');
    await queryInterface.removeColumn('socialmedia', 'socialmedia_img');
    await queryInterface.removeColumn('socialmedia', 'createdAt');
    await queryInterface.removeColumn('socialmedia', 'updatedAt');
  }
};
