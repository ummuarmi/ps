'use strict';
let recruiter = require('../components/recruiter/routes');
let rootRoutes = require('../components/root/routes');

/**
 *
 * @param app
 * @returns {*}
 */
module.exports = function (app) {
    app.use('/', rootRoutes);
    app.use('/recruiter', recruiter);
    app.all('/*', function (req, res) {
        return res.status(404).json({message: 'Cannot find specified URL'});
    });

    return app
};
