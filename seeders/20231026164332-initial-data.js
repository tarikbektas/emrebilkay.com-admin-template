'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('hakkimizdas', [
      {
        page2_hakkimizdatop:'test',
        page2_hakkimizdabot:'test',
        page2_spotify_link:'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('hakkimizdas', null, {});
  }
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('socialmedia', [
      {
        socialmedia_sira:'1',
        socialmedia_logo:'test',
        socialmedia_img:'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('socialmedia', null, {});
  }
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('genelayarlars', [
      {
        site_title:'WTB Bilişim',
        site_description:'WTB Bilişim',
        site_keywords:'WTB Bilişim',
        instagram_username:'WTB Bilişim',
        site_url:'WTB Bilişim',
        facebook_username:'WTB Bilişim',
        phone:'0123 456 7890',
        bakim_modu:'1',
        twitter_username:'WTB Bilişim',
        email:'admin@wtbbilişim.com',
        youtube_username:'WTB Bilişim',
        address:'İstanbul/Türkiye',
        contact_mail:'admin@wtbbilisim.com',
        whastsapp_number:'0123 456 7890',
        second_phone:'0123 456 7890',
        iframe_id :'wtb bilişim iframe id ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genelayarlars', null, {});
  }
};
