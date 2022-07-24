/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When trying to retrieve a data in the server, but the data cannot be found.
 * Use this for objects that have possibility to be unavailable in the server. For a static data that supposted to be
 * available, use ImportantObjectNotFoundError instead.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function ObjectNotFoundError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, ObjectNotFoundError);
      this.name = 'ObjectNotFoundError';
      this.message = message;
      this.http_code = httpCode || 404;
      this.severity = severity || 'info';
      this.bypassLog = isNotLogged || true;
    }

    util.inherits(ObjectNotFoundError, Error);

    return{
      ObjectNotFoundError: ObjectNotFoundError
    };
  }()
);