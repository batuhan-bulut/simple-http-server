const express = require('express')
const crypto = require("node:crypto")
const router = express.Router()
const basicAuth = require('express-basic-auth') // Basic Auth
const auth = require('http-auth') // Digest Auth
const logger = require('./../logger')
let creds

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
    challenge: true,
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


//////


// Digest Auth
router.use("/digestAuth/:user/:pass", (req, res, next) => {
    creds = { digest:{
        user: req.params.user,
        pass: req.params.pass
    } }
    next()
})

const digest = auth.digest(
    {
        realm: "digestAuth"
    },
    (username, callback) => {
        // Expecting md5(username:realm:password) in callback.
        if (username === creds.digest.user) {
            callback(md5(`${creds.digest.user}:digestAuth:${creds.digest.pass}`));
        } else if (username === "tigran") {
            callback(md5(`tigran:digestAuth:great`));
        } else {
            callback();
        }
    }
);

router.get("/digestAuth/:user/:pass", digest.check((req, res,) => {
    console.log("I'm in digest!!!!!!!!!!!!!!!");
    res.status(200).send("Auth Success!")
}), (req, res) => {
    //
    // #swagger.tags = ['Auth']
    // #swagger.summary = 'GET request with Digest Auth'
    // #swagger.description = 'Testing digest header authentication with challenge enabled. (Keep asking until you enter correct)'
    // #swagger.responses[200] = { description: 'Auth Successful.',}
    // #swagger.responses[401] = { description: 'UnAuth Request.',}
    //
    logger.info("Login Success!")
    res.status(220).send("Auth Success!")
})

/**
 * Returns an MD5 hash for the given `content`.
 *
 * @param {String} content
 *
 * @returns {String}
 */
function md5(content) {
    return crypto.createHash('md5').update(content).digest('hex')
}
module.exports = router