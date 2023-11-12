const Sequelize = require('sequelize');

const sequelize = new Sequelize('emrebil','root','test123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize