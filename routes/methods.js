const express = require('express')
const router = express.Router()


router.get("/get", (req, res) => {
    // #swagger.tags = ['Methods']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a 200 OK response'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    console.log(req.method)
    req.method == "GET" ? res.status(200).send(req.headers) : res.status(403).send()
    

})

router.post("/post", (req, res) => {
    // #swagger.tags = ['Methods']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a 200 OK response'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "POST" ? res.status(200).send(req.headers) : res.status(403).send()


})

router.delete("/delete", (req, res) => {
    // #swagger.tags = ['Methods']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a 200 OK response'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "DELETE" ? res.status(200).send(req.headers) : res.status(403).send()

})

router.head("/head", (req, res) => {
    // #swagger.tags = ['Methods']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a 200 OK response'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "HEAD" ? res.status(200).send(req.headers) : res.status(403).send()

})

router.options("/options", (req, res) => {
    // #swagger.tags = ['Methods']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a 200 OK response'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "OPTIONS" ? res.status(200).send(req.headers) : res.status(403).send()

})

router.patch("/patch", (req, res) => {
    // #swagger.tags = ['Methods']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a 200 OK response'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "PATCH" ? res.status(200).send(req.headers) : res.status(403).send()

})

router.put("/put", (req, res) => {
    // #swagger.tags = ['Methods']
    // #swagger.summary = 'Returns Request Headers'
    // #swagger.description = 'Returns Request Headers as a 200 OK response'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    //
    req.method == "PUT" ? res.status(200).send(req.headers) : res.status(403).send()

})

module.exports = router