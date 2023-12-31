const express = require('express')
const app = express()
const port = 3000

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const logger = require('./logger')
const authRouter =  require('./routes/auth')
const methodRouter = require("./routes/methods")
const customRouter = require("./routes/customResponses")
const reqRouter = require("./routes/reqInspection")

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

//Routers
app.use("/methods", methodRouter)
app.use("/auth", authRouter)
app.use("/custom", customRouter)
app.use("/req", reqRouter)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.all('*', function(req, res){
  res.redirect("../docs")
});

// Main app
app.listen(port, () => {
  logger.info(`Server listening on http://localhost:${port}`)
})