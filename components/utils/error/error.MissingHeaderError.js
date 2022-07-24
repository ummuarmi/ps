/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When data in header is missing.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function MissingHeaderError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, MissingHeaderError);
      this.name = 'MissingHeaderError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(MissingHeaderError, Error);

    return {
      MissingHeaderError: MissingHeaderError
    };
  }()
);