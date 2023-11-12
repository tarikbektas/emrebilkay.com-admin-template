const Sequelize = require('sequelize');
const sequelize = require('../utility/database');


const Fotografgaleri = sequelize.define('fotografgalerisis',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      fotografgalerisi_sira:Sequelize.INTEGER,
      fotografgalerisi_url:Sequelize.STRING,
      
})
module.exports = Fotografgaleri