'use strict';
let mysql = require('mysql');
let config = require('config');

/***
 * Database mySQL
 * @returns {{init: init, dbConn: dbConn}}
 */
module.exports = function () {

    let dbConn = mysql.createConnection({
        host: config.mysqlService.host,
        user: config.mysqlService.user,
        password: config.mysqlService.password,
        database: config.mysqlService.database
    });

    let isInitialized = false;

    function init() {
        if (!isInitialized) {

            dbConn.connect(function(err) {
                if (err) {
                    console.log(`Error: ${err}`);
                    console.log("[MYSQL] Error connecting to mysql:" + err + '\n');
                    return process.exit(7);
                }

                console.log("Connection is available");
                console.log(`connected to DB HOST: ` + config.mysqlService.host);
                console.log(`connected to DB NAME: ` + config.mysqlService.database);
                // dbConn.query(sql, function (err, result) {
                //     if (err) throw err;
                //     console.log("Result: " + result);
                // });
            });

            isInitialized = true;
        }
    }

    return {
        init: init,
        dbConn: dbConn
    };
}();
