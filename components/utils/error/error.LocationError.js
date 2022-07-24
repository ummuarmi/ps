/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When country header contains unsupported countries.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function LocationError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, LocationError);
      this.name = 'LocationError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(LocationError, Error);

    return {
      LocationError: LocationError
    };
  }()
);