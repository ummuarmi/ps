/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When a user fails to enter correct password / email / username.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function AuthError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, AuthError);
      this.name = 'AuthError';
      this.message = message;
      this.http_code = httpCode || 401;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(AuthError, Error);

    return {
      AuthError: AuthError
    };
  }()
);