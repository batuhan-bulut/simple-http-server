const express = require('express')
const router = express.Router()

router.get("/ip", (req,res) => {
    // #swagger.tags = ['Other']
    // #swagger.summary = 'Returns IP address of requester'
    // #swagger.description = 'Returns IP address of requester'
    // #swagger.responses[200] = { description: 'IP address',}
    //
    res.status(200).send(req.ip)
})

router.all('*', function(req, res){
    res.status(404).send('what???');
  });


module.exports= router