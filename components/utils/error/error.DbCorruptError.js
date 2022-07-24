/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When some required fields in the database is MISSING or CANNOT BE READ.
 * Use Request*Error if the error is coming directly from a user.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function DbCorruptError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, DbCorruptError);
      this.name = 'DbCorruptError';
      this.message = message;
      this.http_code = httpCode || 500;
      this.severity = severity || 'error';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(DbCorruptError, Error);

    return {
      DbCorruptError: DbCorruptError
    };
  }()
);