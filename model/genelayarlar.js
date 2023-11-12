const Sequelize = require('sequelize')
const sequelize = require('../utility/database')


const Genelayarlar = sequelize.define('genelayarlars',{
      id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    site_title:Sequelize.STRING,
    site_url :Sequelize.STRING,
    site_description :Sequelize.STRING,
    site_keywords:Sequelize.STRING,
    bakim_modu:Sequelize.STRING,
    whastsapp_number:Sequelize.STRING,
    instagram_username:Sequelize.STRING,
    site_url:Sequelize.STRING,
    facebook_username:Sequelize.STRING,
    phone:Sequelize.INTEGER,
    twitter_username:Sequelize.STRING,
    email:Sequelize.STRING,
    youtube_username:Sequelize.STRING,
    address:Sequelize.STRING,
    logo:Sequelize.STRING,
    favicon:Sequelize.STRING,
    contact_mail:Sequelize.STRING,
    second_phone:Sequelize.INTEGER,
    iframe_id:Sequelize.STRING
  })
   
  
   
  module.exports = Genelayarlar