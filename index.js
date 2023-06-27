require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const port = 3000

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')


const logger = require('./logger')
const authRouter =  require('./routes/auth')

//Routers
app.use("/auth", authRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// Simple console logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} | ${req.url}`)
  next()
})

// Error Handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Main app
app.listen(port, () => {
  logger.info(`Server listening on http://localhost:${port}`)
})