//const fs = require('fs');

const logTime = new Date().toISOString()
function info(message) {
    let logMessage = `[INFO] | ${logTime} |` + message
    console.log(logMessage)
//     fs.appendFile('./log.csv', logMessage + "\n", err => {
//         if (err) {
//           console.error(err);
//         } 
// })

}

module.exports = {
    "info": info
}