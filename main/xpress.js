'use strict';
let path = require('path');
let cors = require('cors');
let config = require('config');
let logger = require('morgan');
let express = require('express');
let cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger.json');


/**
 *
 * @returns {*}
 */
module.exports = function () {
    let app = express();

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    app.set('trust proxy', true);
    app.set('etag', false);
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json()); // parse form data client
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(fileUpload());

    app.use(cors({
        origin: config.allowedURLs,
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        allowedHeaders: ['X-Requested-With', 'X-File-Name', 'Content-Type', 'Authorization', 'Location', 'Language', 'Device-ID', 'Timestamp', 'Key', 'Encrypted-Content-Type'],
        exposedHeaders: ['File-Type', 'File-Length', 'Content-Type', 'Content-Length', 'Last-Modified', 'Last-Created']
    }));


    // let options = {
    //     validatorUrl: null,
    //     docExpansion: 'full'
    // };
    // app.use('/apidocs', swaggerUi.serve);
    // app.get('/apidocs', swaggerUi.setup(swaggerDocument, false, options, '.swagger-ui'));


    return app;
};
