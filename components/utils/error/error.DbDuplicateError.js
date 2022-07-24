/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When server tries to save duplicated data. The rules must be specified in the model.
 * Use Request*Error if the data is coming directly from a user.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function DbDuplicateError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, DbDuplicateError);
      this.name = 'DbDuplicateError';
      this.message = message;
      this.http_code = httpCode || 500;
      this.severity = severity || 'warning';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(DbDuplicateError, Error);

    return {
      DbDuplicateError: DbDuplicateError
    };
  }()
);