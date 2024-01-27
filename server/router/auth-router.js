const express = require('express');
const router = express();
const controller = require('../controller/auth-controller');
const registerSchema = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware');

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
router.route('/login').post(controller.login);

module.exports = router;