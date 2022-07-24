/**
 * Created by Ummu Habibah Fadzim on 01/01/2019.
 */
'use strict';

let _ = require('lodash');


module.exports = function () {
    let customErrors = _({})
    //400
        .merge(require('./error.MissingBodyError.js'))
        .merge(require('./error.InvalidBodyError.js'))
        .merge(require('./error.MissingAuthError.js'))
        .merge(require('./error.InvalidAuthError.js'))
        .merge(require('./error.MissingHeaderError.js'))
        .merge(require('./error.InvalidHeaderError.js'))
        .merge(require('./error.MissingParamError.js'))
        .merge(require('./error.InvalidParamError.js'))
        .merge(require('./error.MissingQueryError.js'))
        .merge(require('./error.InvalidQueryError.js'))
        .merge(require('./error.LocationError.js'))
        .merge(require('./error.LanguageError'))
        .merge(require('./error.TimestampError'))
        .merge(require('./error.DeviceError'))
        .merge(require('./error.SyncDataError'))

        //401
        .merge(require('./error.AuthError'))
        .merge(require('./error.VerificationError'))

        //403
        .merge(require('./error.ObjectInactiveError'))
        .merge(require('./error.ObjectExpiredError'))
        .merge(require('./error.UserInactiveError'))
        .merge(require('./error.DependencyInactiveError'))
        .merge(require('./error.ForbiddenError'))
        .merge(require('./error.InsufficientRequirementsError'))

        //404
        .merge(require('./error.ObjectNotFoundError.js'))
        .merge(require('./error.ImportantObjectNotFoundError'))

        //500
        .merge(require('./error.DbCorruptError'))
        .merge(require('./error.DbDuplicateError'))
        .merge(require('./error.DbRuleError.js'))
        .merge(require('./error.EmptyDataError.js'))
        .merge(require('./error.InternalParseError.js'))
        .merge(require('./error.ServerAuthError'))
        .merge(require('./error.ResourceUnavailableError'))

        .value();

    //Parse different type of error message
    customErrors.parseErrorMessage = function (err) {
        if (err.errors) {
            if (_.isArray(err.errors)) {
                if (err.errors[0] && err.errors[0].status)
                    return err.errors[0].status.message;
                else if (err.errors[0].message)
                    return err.errors[0].message;
            }
            else {
                if (err.errors.status)
                    return err.errors.status.message;
                else if (err.errors.message)
                    return err.errors.message;

                let errArray = _.toArray(err.errors);

                if (_.isArray(errArray)) {
                    if (errArray[0] && errArray[0].message)
                        return errArray[0].message;
                }
            }
        }

        return err.message || "Unknown error message";
    };

    return customErrors;
}();
