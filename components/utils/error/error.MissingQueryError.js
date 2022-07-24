/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When the data in query is missing.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function MissingQueryError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, MissingQueryError);
      this.name = 'MissingQueryError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(MissingQueryError, Error);

    return {
      MissingQueryError: MissingQueryError
    };
  }()
);