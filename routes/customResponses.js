const express = require('express')
const router = express.Router()

let resCode = 0
router.use("*/:responseCode",(req,res,next) => { 
    resCode = Number(req.params.responseCode)
    next()

})
 
router.get("/get/:responseCode", (req, res) => {
    // #swagger.tags = ['Custom']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a responseCode'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "GET" ? res.status(resCode).send(req.headers) : res.status(403).send()
    

})

router.post("/post/:responseCode", (req, res) => {
    // #swagger.tags = ['Custom']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a responseCode'
    // #swagger.responses[100-199] = { description: 'Informational responses',}
    // #swagger.responses[200-299] = { description: 'Successful responses',}
    // #swagger.responses[300 - 399] = { description: 'Redirection messages',}
    // #swagger.responses[400-499] = { description: 'Client error responses',}
    // #swagger.responses[500-599] = { description: 'Server error responses ',}
    //
    req.method == "POST" ? res.status(resCode).send(req.headers) : res.status(403).send()


})

router.delete("/delete/:responseCode", (req, res) => {
    // #swagger.tags = ['Custom']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a responseCode'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "DELETE" ? res.status(resCode).send(req.headers) : res.status(403).send()

})

router.head("/head/:responseCode", (req, res) => {
    // #swagger.tags = ['Custom']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a responseCode'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "HEAD" ? res.status(resCode).send(req.headers) : res.status(403).send()

})

router.options("/options/:responseCode", (req, res) => {
    // #swagger.tags = ['Custom']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a responseCode'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "OPTIONS" ? res.status(resCode).send(req.headers) : res.status(403).send()

})

router.patch("/patch/:responseCode", (req, res) => {
    // #swagger.tags = ['Custom']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a responseCode'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "PATCH" ? res.status(resCode).send(req.headers) : res.status(403).send()

})

router.put("/put/:responseCode", (req, res) => {
    // #swagger.tags = ['Custom']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a responseCode'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "PUT" ? res.status(resCode).send(req.headers) : res.status(403).send()

})

router.all('*', function(req, res){
    res.status(404).send('what???');
  });


module.exports = router