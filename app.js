'use strict';

module.exports = function () {

    let xpress = require('./main/xpress');
    let routes = require('./main/routes');
    let errors = require('./main/errors');
    let dbConnection = require('./main/dbconn');

    let app = xpress();
    app = routes(app);
    app = errors(app);

    dbConnection.init();

    return app;
}();
