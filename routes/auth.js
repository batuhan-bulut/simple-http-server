const express = require('express')
const basicAuth = require('express-basic-auth')
const router = express.Router()

const logger = require('./../logger')
let creds

router.use("/basicAuth/:user/:pass",(req,res,next) => {
    creds = {user:req.params.user, pass:req.params.pass}
    next()
})

router.use("/basicAuth/:user/:pass", basicAuth({
    authorizer: myAuthorizer,
    unauthorizedResponse: getUnauthorizedResponse,
    challenge: true,
})
)

router.get("/basicAuth/:user/:pass", (req,res) => {
    //
    // #swagger.tags = ['Auth']
    // #swagger.summary = 'GET request with Basic Auth'
    // #swagger.description = 'Testing basic header authentication with challenge enabled. (Keep asking until you enter correct)'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    // #swagger.responses[401] = { description: 'UnAuth Request.',}
    //
    logger.info("Login Success!")
    res.status(200).send("Auth Success!")
})

function myAuthorizer(username, password) {
    const userMatches = basicAuth.safeCompare(username, creds.user)
    const passwordMatches = basicAuth.safeCompare(password, creds.pass)

    return userMatches & passwordMatches
}

function getUnauthorizedResponse(req) {
    logger.info("Login Failed!")
    return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
}

module.exports = router