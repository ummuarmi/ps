var express = require('express');
var router = express.Router();

var recruiterCtrl = require('./recruiter.controller');

// recruiter Endpoint
router.get('/', recruiterCtrl.getHomePage);
router.get('/add', recruiterCtrl.addJobPage);
router.post('/add', recruiterCtrl.addJob);
router.get('/edit/:id', recruiterCtrl.editJobPage);
router.post('/edit/:id', recruiterCtrl.editJob);
router.get('/delete/:id', recruiterCtrl.deleteJob);

module.exports = router;
