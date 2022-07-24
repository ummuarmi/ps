/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When a user is locked by admin or got suspended. Usually used during login or authentication.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function UserInactiveError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, UserInactiveError);
      this.name = 'UserInactiveError';
      this.message = message;
      this.http_code = httpCode || 403;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(UserInactiveError, Error);

    return {
      UserInactiveError: UserInactiveError
    };
  }()
);