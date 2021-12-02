const {sequelize} = require('sequelize')

module.exports = new Sequelize ({
    process.env.DB_NAME,
    process.env.DB_NAME,
    process.env.DB_NAME,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
})