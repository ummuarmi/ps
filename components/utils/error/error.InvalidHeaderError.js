/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When the data parsed from request header contains invalid information or corrupted.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function InvalidHeaderError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, InvalidHeaderError);
      this.name = 'InvalidHeaderError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(InvalidHeaderError, Error);

    return {
      InvalidHeaderError: InvalidHeaderError
    };
  }()
);