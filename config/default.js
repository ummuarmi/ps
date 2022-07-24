'use strict';

let path = require('path');
let fs = require('fs');

// Default configuration, may be overwritten with environment specific configuration
// ==================================b
module.exports = {
    // Root path of server
    root: path.normalize(__dirname + '/..'),

    //Set the environment
    env: process.env.NODE_ENV,

    name: process.env.APP_NAME || 'ps',

    version: process.env.APP_VERSION || '0.0.1',

    // Default server protocol
    protocol: process.env.PROTOCOL || 'https',

    // Server IP
    ip: process.env.IP || "127.0.0.1",

    // Server port
    port: process.env.PORT || 8383,

    // Allowed URLs to connect
    allowedURLs: process.env.ALLOWED_URL || '*',


    // Expiration length for session and token
    expiration: {
        serverToken: 14 * 24 * 60,
        playerToken: 14 * 24 * 60
    },

    // mysql server local
    mysqlService: {
        host: process.env.MYSQL_URL || "127.0.0.1",
        port: process.env.MYSQL_PORT || "3306",
        user: process.env.MYSQL_USERNAME || "ummu",
        database: process.env.MYSQL_DBNAME || "pulsifi_db",
        password: process.env.MYSQL_PASSWORD || "ummu@2911"
    },

    // bearer
    jwtToken: {
        jwtKey: "s04Ar@202!",
        jwtExpirySeconds: 216 * 1000,
        jwtAlgo: "HS256"
    }

};
