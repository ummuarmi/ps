/**
 * Created by Ummu Habibah on 23/11/2019.
 */
'use strict';
// let createError = require('http-errors');
let config = require('config');
let customError = require('../components/utils/error/plugin.error');
/**
 *
 * @param app
 * @returns {*}
 */
module.exports = function (app) {
    // catch 404 and forward to error handler
    // app.use(function (req, res, next) {
    //     next(createError(404));
    // });

    // error handler
    app.use(function (err, req, res, next) {
        err.http_code = err.http_code || 500;
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = config.env === 'development' ? err : {};

        // render the error page
        // res.status(err.status || 500);
        // res.render('error');
        if (config.env === 'production')
            return res.status(err.http_code).json({name: err.name, message: customError.parseErrorMessage(err)});
        else
            console.log(err.stack);
        return res.status(err.http_code).json({
            name: err.name,
            message: customError.parseErrorMessage(err),
            stack: err.stack
        });
    });

    return app;
};
