function log(req, res, next) {

    console.log("Im here")
    next();


}

module.exports = log;

