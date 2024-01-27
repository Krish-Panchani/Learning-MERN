const express = require('express');
const router = express.Router();
const controller = require('../controller/contact-controller');

router.route("/contact").post(controller.contactForm);

module.exports = router;