/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When auth data in header is missing.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function MissingAuthError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, MissingAuthError);
      this.name = 'MissingAuthError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(MissingAuthError, Error);

    return {
      MissingAuthError: MissingAuthError
    };
  }()
);