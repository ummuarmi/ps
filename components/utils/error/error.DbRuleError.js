/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 * Use case: When the data in database DOES NOT MATCH THE RULE set for the corresponding data model.
 * Use Request*Error if the error is coming directly from a user.
 */
'use strict';

let util = require('util');

module.exports = (
  function(){
    function DbRuleError(message, isNotLogged, severity, httpCode) {
      Error.call(this);
      Error.captureStackTrace(this, DbRuleError);
      this.name = 'DbRuleError';
      this.message = message;
      this.http_code = httpCode || 500;
      this.severity = severity || 'warning';
      this.bypassLog = isNotLogged || false;
    }

    util.inherits(DbRuleError, Error);

    return {
      DbRuleError: DbRuleError
    };
  }()
);