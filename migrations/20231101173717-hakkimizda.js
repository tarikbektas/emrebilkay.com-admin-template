'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   genelayarlars
   await queryInterface.addColumn('hakkimizdas', 'id', {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  });
  await queryInterface.addColumn('hakkimizdas', 'page2_hakkimizdatop', {
    type: Sequelize.STRING,
    allowNull: true
  });
    await queryInterface.addColumn('hakkimizdas', 'page2_hakkimizdabot', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('hakkimizdas', 'page2_spotify_link', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('hakkimizdas', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });

    await queryInterface.addColumn('hakkimizdas', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('hakkimizdas', 'id');
    await queryInterface.removeColumn('hakkimizdas', 'page2_hakkimizdatop');
    await queryInterface.removeColumn('hakkimizdas', 'page2_hakkimizdabot');
    await queryInterface.removeColumn('hakkimizdas', 'page2_spotify_link');
    await queryInterface.removeColumn('hakkimizdas', 'createdAt');
    await queryInterface.removeColumn('hakkimizdas', 'updatedAt');
  }
};
