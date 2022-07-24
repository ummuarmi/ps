/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When a user tries to get an object in the database / server, but it is locked or suspended by admin.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function ObjectInactiveError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, ObjectInactiveError);
      this.name = 'ObjectInactiveError';
      this.message = message;
      this.http_code = httpCode || 403;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(ObjectInactiveError, Error);

    return {
      ObjectInactiveError: ObjectInactiveError
    };
  }()
);