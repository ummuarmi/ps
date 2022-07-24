/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When a user tries to obtain something, but it is not available anymore.
 * E.g. Redeeming a reward but the reward is all gone.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function ResourceUnavailableError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, ResourceUnavailableError);
      this.name = 'ResourceUnavailableError';
      this.message = message;
      this.http_code = httpCode || 500;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(ResourceUnavailableError, Error);

    return {
      ResourceUnavailableError: ResourceUnavailableError
    };
  }()
);