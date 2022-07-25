"use strict";
global.mocha = require('mocha');
let expect = require('chai').expect;
const mockReq = require('sinon-express-mock').mockReq;

describe('Recruiter Controller Tests', function () {

    let recruiterCtrl = require('../components/recruiter/recruiter.controller');

    describe('should return web page with contains', function () {

        it('should return home page file name and text', function (done) {

            const request = {
                body: {}
            };

            const req = mockReq(request);

            recruiterCtrl.getHomePage(req, function (err, reply) {
                console.log("reply >> ", reply);
                assert(reply);
                done();
            });


        });

        it('should add Job', function (done) {

            const request = {
                body: {
                    job_title: 'Web Developer',
                    job_description: 'know Joomla CMS',
                    job_location: 'Jalan Pinang',
                    job_company: 'Dream Chorus',
                    job_status: 'open',
                    ur_id: 1
                }
            };

            const req = mockReq(request);

            recruiterCtrl.addJob(req, function (err, reply) {
                console.log("reply >> ", reply);
                assert(reply);
                done();
            });


        });
    });


});
