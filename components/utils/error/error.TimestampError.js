/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When language header is not corrupt or mismatch.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function TimestampError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, TimestampError);
      this.name = 'TimestampError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(TimestampError, Error);

    return {
      TimestampError: TimestampError
    };
  }()
);