const Sequelize = require('sequelize');
const sequelize = require('../utility/database');


const Fotografgaleri = sequelize.define('html',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      html_icerik:Sequelize.TEXT('long')
      
})
module.exports = Fotografgaleri