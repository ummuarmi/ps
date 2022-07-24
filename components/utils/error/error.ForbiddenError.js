/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When a user trying to access something that is off-limit to him. Use this only when user deliberately trying
 * to access something important which should have been protected by the system. Usually caused by malicious actions.
 * Use ObjectInactiveError if the user access something that is meant for him, but just not available anymore.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function ForbiddenError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, ForbiddenError);
      this.name = 'ForbiddenError';
      this.message = message;
      this.http_code = httpCode || 403;
      this.severity = severity || 'warning';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(ForbiddenError, Error);

    return{
      ForbiddenError: ForbiddenError
    };
  }()
);