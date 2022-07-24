/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When server fails to parse a data that is calculated from within the app.
 * Use Request*Error if the data is coming directly from a user.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function InternalParseError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, InternalParseError);
      this.name = 'InternalParseError';
      this.message = message;
      this.http_code = httpCode || 500;
      this.severity = severity || 'error';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(InternalParseError, Error);

    return {
      InternalParseError: InternalParseError
    };
  }()
);