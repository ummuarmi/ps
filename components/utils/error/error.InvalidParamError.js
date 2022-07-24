/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When the data parsed from query parameter contains invalid information or corrupted.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function InvalidParamError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, InvalidParamError);
      this.name = 'InvalidParamError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(InvalidParamError, Error);

    return {
      InvalidParamError: InvalidParamError
    };
  }()
);