const Sequelize = require('sequelize');
const sequelize = require('../utility/database')

const Haberler = sequelize.define('haberlers',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    title:Sequelize.STRING,
    sira:Sequelize.INTEGER,
    desc:Sequelize.STRING,
    img:Sequelize.STRING
     
   
  })
   
  
   
  module.exports = Haberler