const swaggerAutogen = require('swagger-autogen')()
const doc = {
    info: {
      version: '1.0.0',      // by default: '1.0.0'
      title: 'Simple Http Server',        // by default: 'REST API'
      description: '[ docker pull bulutbatuhan/simple-http-server ]<br>[ docker run -p 3000:3000 bulutbatuhan/simple-server ]<br>[ https://github.com/batuhan-bulut/simple-http-server ]',  // by default: ''
    }}
const outputFile = './swagger_output.json'
const endpointsFiles = ['./index.js']

swaggerAutogen(outputFile, endpointsFiles, doc)