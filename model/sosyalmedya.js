const  Sequelize = require('sequelize');
const sequelize = require('../utility/database');

const Sosyalmedya = sequelize.define('socialmedia',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      socialmedia_sira:Sequelize.INTEGER,
      socialmedia_logo:Sequelize.STRING,
      socialmedia_img:Sequelize.STRING,
      link:Sequelize.STRING

})


module.exports = Sosyalmedya