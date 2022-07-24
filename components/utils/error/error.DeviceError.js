/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When device-id header is not corrupt or mismatch.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function DeviceError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, DeviceError);
      this.name = 'DeviceError';
      this.message = message;
      this.http_code = httpCode || 400;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(DeviceError, Error);

    return {
      DeviceError: DeviceError
    };
  }()
);