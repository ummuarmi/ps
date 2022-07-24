/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When body data is missing whereas its needed.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function MissingBodyError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, MissingBodyError);
      this.name = 'MissingBodyError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(MissingBodyError, Error);

    return {
      MissingBodyError: MissingBodyError
    };
  }()
);