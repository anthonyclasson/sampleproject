"use strict";

module.exports = function(app, db, mongoose) {
    var CertifiersModel = require("./models/certifiers.model.js")(db, mongoose);

    require("./services/certifiers.service.js")(app, CertifiersModel);
};