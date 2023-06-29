const express = require('express')
const router = express.Router()
const basicAuth = require('express-basic-auth') // Basic Auth
const auth = require('http-auth') // Digest Auth

const utils = require("./../node_modules/http-auth/src/auth/utils")
const logger = require('./../logger')
let creds

// Basic Auth
router.use("/hiddenbasicAuth/:user/:pass", (req, res, next) => {
    creds = {
        basic: {
            user: req.params.user,
            pass: req.params.pass
        }
    },
    console.log(req.headers)
        next()
})

router.use("/hiddenbasicAuth/:user/:pass", basicAuth({
    authorizer: myAuthorizer,
    unauthorizedResponse: hiddenResponse,
    //challenge: true,
})
)
// Basic Auth
router.get("/hiddenbasicAuth/:user/:pass", (req, res) => {
    //
    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */
    // #swagger.tags = ['Auth']
    // #swagger.summary = 'GET request with Basic Auth'
    // #swagger.description = 'Testing basic header authentication with challenge enabled. (Keep asking until you enter correct)'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    // #swagger.responses[401] = { description: 'UnAuth Request.',}
    //
    logger.info("Login Success!")
    res.status(200).send("Hidden Info, Auth Success")
})



function hiddenResponse(req) {
    logger.info("Login Failed!")
    return 'Lorem Ipsum'
}











// Basic Auth
router.use("/basicAuth/:user/:pass", (req, res, next) => {
    creds = {
        basic: {
            user: req.params.user,
            pass: req.params.pass
        }
    },
        next()
})
// Basic Auth
router.use("/basicAuth/:user/:pass", basicAuth({
    authorizer: myAuthorizer,
    unauthorizedResponse: getUnauthorizedResponse,
    //challenge: true,
})
)
// Basic Auth
router.get("/basicAuth/:user/:pass", (req, res) => {
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
    const userMatches = basicAuth.safeCompare(username, creds.basic.user)
    const passwordMatches = basicAuth.safeCompare(password, creds.basic.pass)

    return userMatches & passwordMatches
}

function getUnauthorizedResponse(req) {
    logger.info("Login Failed!")
    return req.auth
        ? ('Credentials ' + req.auth.username + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
}


/// Digest Auth
router.use("/digestAuth/:user/:pass", (req, res, next) => {
    creds = {
        digest: {
            user: req.params.user,
            pass: req.params.pass
        }
    }
    next()
})

const digest = auth.digest(
    { realm: "digestAuth" },
    (username, callback) => {
        // Expecting md5(username:realm:password) in callback.
        if (username === creds.digest.user) {
            callback(utils.md5(`${creds.digest.user}:digestAuth:${creds.digest.pass}`));
        }
    });


router.get("/digestAuth/:user/:pass", digest.check((req, res) => {
    //
    // #swagger.tags = ['Auth']
    // #swagger.summary = 'GET request with Digest Auth'
    // #swagger.description = 'Testing digest header authentication with challenge enabled. (Keep asking until you enter correct)'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    // #swagger.responses[401] = { description: 'UnAuth Request.',}
    //
    logger.info("Login Success!")
    res.status(200).send("Auth Success!")

}))

digest.on("success", result => {
    logger.info(`User authenticated: ${result.user}`);
});

digest.on("fail", result => {
    logger.info(`User authentication failed: ${result.user}`);
});

digest.on("error", error => {
    logger.info(`Authentication error: ${error.code + " - " + error.message}`);
});


/// Digest Auth

module.exports = router