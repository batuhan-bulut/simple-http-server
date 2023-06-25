const logTime = new Date().toISOString()
function info(message) {
    
    console.log(`[INFO] | ${logTime} | `, message)
}

module.exports = {
    "info": info
}