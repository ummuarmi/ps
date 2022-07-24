'use strict';

let dbConn = require('../../main/dbconn').dbConn;

module.exports = function () {


    return {
        runQuery: runQuery
    };

    function runQuery(sqlStatement, callback) {

        dbConn.query(sqlStatement, function (err, result) {
            if (err) return callback(err, result);
            return callback(null, result);
        });

    }

}();
