const Sequelize = require('sequelize');
const sequelize = require('../utility/database');


const Videogaleri = sequelize.define('videogaleris',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      videogaleri_sira:Sequelize.INTEGER,
      videogaleri_title:Sequelize.STRING,
      socialmedia_url:Sequelize.TEXT('long')

})

module.exports = Videogaleri