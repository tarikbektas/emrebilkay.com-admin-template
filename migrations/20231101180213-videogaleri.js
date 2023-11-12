'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   genelayarlars
   await queryInterface.addColumn('videogaleris', 'id', {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  });
  await queryInterface.addColumn('videogaleris', 'videogaleri_sira', {
    type: Sequelize.STRING,
    allowNull: true
  });
    await queryInterface.addColumn('videogaleris', 'videogaleri_title', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('videogaleris', 'socialmedia_url', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('videogaleris', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });

    await queryInterface.addColumn('videogaleris', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('videogaleris', 'id');
    await queryInterface.removeColumn('videogaleris', 'videogaleri_sira');
    await queryInterface.removeColumn('videogaleris', 'videogaleri_title');
    await queryInterface.removeColumn('videogaleris', 'socialmedia_url');
    await queryInterface.removeColumn('videogaleris', 'createdAt');
    await queryInterface.removeColumn('videogaleris', 'updatedAt');
  }
};
