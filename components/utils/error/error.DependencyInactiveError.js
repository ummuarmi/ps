/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When a parent of the intended object (e.g. Company, or App) is inactive, therefore the object cannot be
 * accessed.
 * If you cannot decide either the dependency or the object itself that cannot be accessed, please use ObjectInactiveError
 * instead.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function DependencyInactiveError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, DependencyInactiveError);
      this.name = 'DependencyInactiveError';
      this.message = message;
      this.http_code = httpCode || 403;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(DependencyInactiveError, Error);

    return {
      DependencyInactiveError: DependencyInactiveError
    };
  }()
);