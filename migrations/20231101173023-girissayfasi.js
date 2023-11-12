'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   genelayarlars
   await queryInterface.addColumn('girissayfasis', 'id', {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  });
  await queryInterface.addColumn('girissayfasis', 'page1_title', {
    type: Sequelize.STRING,
    allowNull: true
  });
    await queryInterface.addColumn('girissayfasis', 'page1_slogan', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('girissayfasis', 'page1_buton_text', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('girissayfasis', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });

    await queryInterface.addColumn('girissayfasis', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('girissayfasis', 'id');
    await queryInterface.removeColumn('girissayfasis', 'page1_title');
    await queryInterface.removeColumn('girissayfasis', 'page1_slogan');
    await queryInterface.removeColumn('girissayfasis', 'page1_buton_text');
    await queryInterface.removeColumn('girissayfasis', 'createdAt');
    await queryInterface.removeColumn('girissayfasis', 'updatedAt');
  }
};
