/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: Server tries to communicate with 3rd party service but denied.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function ServerAuthError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, ServerAuthError);
      this.name = 'ServerAuthError';
      this.message = message;
      this.http_code = httpCode || 500;
      this.severity = severity || 'warning';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(ServerAuthError, Error);

    return {
      ServerAuthError: ServerAuthError
    };
  }()
);