require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000 //Выбор порта для сервера

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate() //Подключение к БД
        await sequelize.sync() //Сверка состояния БД со схемой БД
        app.listen(PORT, () => console.log(`Сервер стартовал на порту ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
