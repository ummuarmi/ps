/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: Occurred when the whole OBJECT from database is EMPTY or MISSING while the requirement is strictly not empty.
 * For missing fields data returned from DB please use DbCorruptError.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function EmptyDataError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, EmptyDataError);
      this.name = 'EmptyDataError';
      this.message = message;
      this.http_code = httpCode || 500;
      this.severity = severity || 'error';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(EmptyDataError, Error);

    return{
      EmptyDataError: EmptyDataError
    };
  }()
);