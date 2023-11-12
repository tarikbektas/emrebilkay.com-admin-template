const Sequelize = require('sequelize');
const sequelize = require('../utility/database')

const Page2 = sequelize.define('hakkimizda',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    page2_hakkimizdatop:Sequelize.TEXT('long'),
    page2_hakkimizdabot:Sequelize.TEXT('long'),
    page2_spotify_link:Sequelize.STRING,
     
   
  })
   
  
   
  module.exports = Page2