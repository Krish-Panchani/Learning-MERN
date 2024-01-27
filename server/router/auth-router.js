const express = require('express');
const router = express();
const controller = require('../controller/auth-controller');
const registerSchema = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware');
const loginSchema = require('../validators/auth-validator');
// router.get('/', (req, res) => {
//   res
//   .status(200)
//   .send(home);
// });

router.route('/').get(controller.home);
router.route('/register').post(
    validate(registerSchema),
    controller.reg
    );
router.route('/login').post(
    validate(loginSchema),
    controller.login
    );

module.exports = router;