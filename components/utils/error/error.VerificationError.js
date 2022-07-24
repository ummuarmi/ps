/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When authentication is a success but the following verification failed.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function VerificationError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, VerificationError);
      this.name = 'VerificationError';
      this.message = message;
      this.http_code = httpCode || 401;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(VerificationError, Error);

    return {
      VerificationError: VerificationError
    };
  }()
);