'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('genelayarlars', 'id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    });
    await queryInterface.addColumn('genelayarlars', 'site_title', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'site_description', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'site_keywords', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'instagram_username', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'site_url', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'facebook_username', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'phone', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'twitter_username', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'email', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'youtube_username', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'address', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'logo', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'favicon', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'contact_mail', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'whastsapp_number', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('genelayarlars', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });

    await queryInterface.addColumn('genelayarlars', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('fotografgalerises', 'id');
    await queryInterface.removeColumn('fotografgalerises', 'site_title');
    await queryInterface.removeColumn('fotografgalerises', 'site_description');
    await queryInterface.removeColumn('fotografgalerises', 'site_keywords');
    await queryInterface.removeColumn('fotografgalerises', 'instagram_username');
    await queryInterface.removeColumn('fotografgalerises', 'site_url');
    await queryInterface.removeColumn('fotografgalerises', 'phone');
    await queryInterface.removeColumn('fotografgalerises', 'twitter_username');
    await queryInterface.removeColumn('fotografgalerises', 'email');
    await queryInterface.removeColumn('fotografgalerises', 'youtube_username');
    await queryInterface.removeColumn('fotografgalerises', 'address');
    await queryInterface.removeColumn('fotografgalerises', 'logo');
    await queryInterface.removeColumn('fotografgalerises', 'favicon');
    await queryInterface.removeColumn('fotografgalerises', 'contact_mail');
    await queryInterface.removeColumn('fotografgalerises', 'whastsapp_number');
    await queryInterface.removeColumn('fotografgalerises', 'createdAt');
    await queryInterface.removeColumn('fotografgalerises', 'updatedAt');


  }
};
