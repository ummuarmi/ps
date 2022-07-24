/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When the data in parameter is missing.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function MissingParamError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, MissingParamError);
      this.name = 'MissingParamError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(MissingParamError, Error);

    return {
      MissingParamError: MissingParamError
    };
  }()
);