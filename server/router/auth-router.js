const express = require('express');
const router = express();
const controller = require('../controller/auth-controller');

// router.get('/', (req, res) => {
//   res
//   .status(200)
//   .send(home);
// });

router.route('/').get(controller.home);
router.route('/register').post(controller.reg);

module.exports = router;