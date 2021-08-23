require('dotenv').config()
const express = require('express')
const sequelize = require('./db')

const app = express()

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`),
    )
  } catch (error) {
    throw new Error(error)
  }
}

start()
