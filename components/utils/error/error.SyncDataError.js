/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When a user tries to get something in the database / server, but it has expired or not available anymore.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function SyncDataError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, SyncDataError);
      this.name = 'SyncDataError';
      this.message = message;
      this.http_code = httpCode || 400 ;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(SyncDataError, Error);

    return {
      SyncDataError: SyncDataError
    };
  }()
);