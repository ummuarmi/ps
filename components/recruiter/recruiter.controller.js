'use strict';
const config = require('config');
const recruiterSrv = require('./recruiter.services');
const _ = require('lodash');
const customError = require('../utils/error/plugin.error');
let moment = require('moment');
const fs = require('fs');

/**
 *
 * @type getHomePage
 */
module.exports = function () {

    /**
     * Call HomePage
     */
    function getHomePage(req, res, next) {

        let query = "SELECT *, DATE(`job_created`) as `datePosted` FROM `jobs` ORDER BY job_id ASC"; // query database to get all the jobs

        recruiterSrv.runQuery(query, function (err, result) {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: 'Welcome to Recruitment Site | View Job Vacancy'
                ,jobs: result
            });

        });

    }

    /**
     * Add Job Page
     */
    function addJobPage (req, res, next) {
        res.render('add-job.ejs', {
            title: 'Welcome to Recruiter Site | Add a new Job Vacancy'
            ,message: ''
        });
    }

    function addJob (req, res, next) {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }

        if (!req.body || !req.body.hasOwnProperty('job_title')) return next(new customError.MissingBodyError('Requires value job_title in body'));
        if (!req.body || !req.body.hasOwnProperty('job_description')) return next(new customError.MissingBodyError('Requires value job_description in body'));
        if (!req.body || !req.body.hasOwnProperty('job_location')) return next(new customError.MissingBodyError('Requires value job_location in body'));
        if (!req.body || !req.body.hasOwnProperty('job_company')) return next(new customError.MissingBodyError('Requires value job_company in body'));
        if (!req.body || !req.body.hasOwnProperty('job_status')) return next(new customError.MissingBodyError('Requires value job_status in body'));
        if (!req.body || !req.body.hasOwnProperty('ur_id')) return next(new customError.MissingBodyError('Requires value ur_id in body'));

        let message = '';
        let ur_id = req.body.ur_id || 1;
        let job_title = req.body.job_title;
        let job_description = req.body.job_description;
        let job_location = req.body.job_location;
        let job_company = req.body.job_company;
        let job_status = req.body.job_status;
        let created_date = moment().format("YYYY-MM-DD HH:mm:ss");

        let image_fileName = "";
        if (!_.isEmpty(job_company)) {
            let splitName = _.split(job_company, ' ');
            _.forEach(splitName, function (a) {
                image_fileName = image_fileName + a;
            });
        }

        let uploadedFile = req.files.image;
        let image_name = uploadedFile.name;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = image_fileName + '.' + fileExtension;

        let usernameQuery = "SELECT * FROM `jobs` WHERE job_title = '" + job_title + "' AND job_company = '" + job_company + "'";

        recruiterSrv.runQuery(usernameQuery, (err, result) => {
            if (err) {
                return res.status(201).send(err);
            }
            if (result.length > 0) {
                message = 'Job Position and From Company already exists';
                res.render('add-job.ejs', {
                    message,
                    title: 'Welcome to Recruiter Site | Add New Job Vacancy'
                });
            } else {
                // check the filetype before uploading it
                if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
                    // upload the file to the /public/assets/img directory
                    uploadedFile.mv(`public/assets/img/${image_name}`, (err ) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        // send the freelancer's details to the database
                        let query = "INSERT INTO `jobs` (ur_id, job_title, job_description, job_location, job_company, job_created, job_status, image) VALUES (" + ur_id + ", '" +
                            job_title + "', '" + job_description + "', '" + job_location + "', '" + job_company + "', '" + created_date + "', '" + job_status + "', '" + image_name + "')";
                        recruiterSrv.runQuery(query, (err, result) => {
                            if (err) {
                                return res.status(201).send(err);
                            }
                            res.redirect('/recruiter');
                        });
                    });
                } else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                    res.render('add-job.ejs', {
                        message,
                        title: 'Welcome to Recruiter Site | Add New Job Vacancy'
                    });
                }
            }
        });
    }

    function editJobPage (req, res, next) {
        let job_id = req.params.id;
        let query = "SELECT * FROM `jobs` WHERE job_id = '" + job_id + "' ";
        recruiterSrv.runQuery(query, (err, result) => {
                if (err) {
                return res.status(201).send(err);
            }
            res.render('edit-job.ejs', {
                title: 'Edit Job'
                ,job: result[0]
                ,message: ''
            });
        });
    }

    function editJob (req, res, next) {
        if (!req.body || !req.body.hasOwnProperty('job_title')) return next(new customError.MissingBodyError('Requires value job_title in body'));
        if (!req.body || !req.body.hasOwnProperty('job_description')) return next(new customError.MissingBodyError('Requires value job_description in body'));
        if (!req.body || !req.body.hasOwnProperty('job_location')) return next(new customError.MissingBodyError('Requires value job_location in body'));
        if (!req.body || !req.body.hasOwnProperty('job_company')) return next(new customError.MissingBodyError('Requires value job_company in body'));
        if (!req.body || !req.body.hasOwnProperty('job_status')) return next(new customError.MissingBodyError('Requires value job_status in body'));
        if (!req.body || !req.body.hasOwnProperty('ur_id')) return next(new customError.MissingBodyError('Requires value ur_id in body'));

        console.log("PARAMS >> ", req.body);
        let job_id = req.params.id;
        let ur_id = req.body.ur_id || 1;
        let job_title = req.body.job_title;
        let job_description = req.body.job_description;
        let job_location = req.body.job_location;
        let job_company = req.body.job_company;
        let job_status = req.body.job_status;
        let update_date = moment().format("YYYY-MM-DD HH:mm:ss");

        let query = "UPDATE `jobs` SET `ur_id` = " + ur_id + ", " +
        "`job_title` = '" + job_title + "', `job_description` = '" + job_description + "', `job_location` = '" + job_location + "', " +
        "`job_company` = '" + job_company + "', `job_status` = '" + job_status + "', `update_date` = '" + update_date + "' WHERE `job_id` = " + job_id;
        recruiterSrv.runQuery(query, (err, result) => {
            if (err) {
                return res.status(201).send(err);
            }
            res.redirect('/recruiter');
        });
    }

    function deleteJob (req, res) {
        let job_id = req.params.id;
        let getImageQuery = 'SELECT image from `jobs` WHERE job_id = "' + job_id + '"';
        let deleteUserQuery = 'DELETE FROM jobs WHERE job_id = "' + job_id + '"';

        recruiterSrv.runQuery(getImageQuery, (err, result) => {
            if (err) {
            return res.status(201).send(err);
        }

        let image = result[0].image;

            fs.unlink('public/assets/img/' + image, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                recruiterSrv.runQuery(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(201).send(err);
                    }
                    res.redirect('/recruiter');
                });
            });
        });
    }

    return {
        getHomePage: getHomePage,
        addJobPage: addJobPage,
        addJob: addJob,
        editJobPage: editJobPage,
        editJob: editJob,
        deleteJob: deleteJob
    };
}();

