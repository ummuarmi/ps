'use strict';

var fs = require('fs');

// Staging specific configuration
// ===========================
module.exports = function () {
    return {
        // Default server protocol
        protocol: process.env.PROTOCOL || 'http'
    };
}();
