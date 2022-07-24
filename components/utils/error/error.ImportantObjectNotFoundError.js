/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When server fails to obtain a very important data from database. Usually caused by malicious activities.
 * For common object, please use ObjectNotFoundError.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function ImportantObjectNotFoundError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, ImportantObjectNotFoundError);
      this.name = 'ImportantObjectNotFoundError';
      this.message = message;
      this.http_code = httpCode || 404;
      this.severity = severity || 'warning';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(ImportantObjectNotFoundError, Error);

    return {
      ImportantObjectNotFoundError: ImportantObjectNotFoundError
    };
  }()
);