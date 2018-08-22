const router = require('express').Router();
const controller = require('./controllers.js');


router.route('/biz/:restaurant/:city?')
  .get(controller.getRestaurant)
  //.post(controller.post)
router.route('/biz')
  .post(controller.postRestaurant)

// router.route('/fakeData')
//   .post(controller.postFakerData)

module.exports = router;
