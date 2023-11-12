const Sequelize = require('sequelize')
const sequelize = require('../utility/database')


const Girissayfasi = sequelize.define('girissayfasi',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    page1_title:Sequelize.STRING,
    page1_slogan :{
      type:Sequelize.STRING,
      allowNull:false,
    },
    page1_buton_text:Sequelize.STRING
   
  })
   
  
   
  module.exports = Girissayfasi