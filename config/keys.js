//credentials for production
if (process.env.NODE_ENV === "production") {
    //under production - production keys
    module.exports= require('./prod');
} else {
    //under development - use dev.js keys
    module.exports= require('./dev');
}
