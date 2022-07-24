/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When a user tries to get an object in the database / server, but he does not meet the requirements.
 * E.g. Insufficient credits.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function InsufficientRequirementsError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, InsufficientRequirementsError);
      this.name = 'InsufficientRequirementsError';
      this.message = message;
      this.http_code = httpCode || 403;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(InsufficientRequirementsError, Error);

    return {
      InsufficientRequirementsError: InsufficientRequirementsError
    };
  }()
);