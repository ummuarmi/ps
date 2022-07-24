'use strict';

var express = require('express');
var config = require('config');
var router = express.Router();

/***
 * This is root endpoint that can give user information about environment and application version
 */
router.get('/', function (req, res, next) {
    res.status(200).json({
        'status': 'OK',
        'version': config.version,
        'environment': config.env
    });
});

module.exports = router;
