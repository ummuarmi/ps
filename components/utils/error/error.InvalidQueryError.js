/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When the data parsed from query body contains invalid information or corrupted.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function InvalidQueryError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, InvalidQueryError);
      this.name = 'InvalidQueryError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(InvalidQueryError, Error);

    return {
      InvalidQueryError: InvalidQueryError
    };
  }()
);